
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

type Point = {
  x: number;
  y: number;
};

interface DrawingCanvasProps {
  imageUrl: string | null;
  onAreaCalculated: (area: number) => void;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ imageUrl, onAreaCalculated }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState<Point[]>([]);
  const [manualArea, setManualArea] = useState<string>('');
  const [scale, setScale] = useState<number>(1); // meters per pixel
  const { toast } = useToast();

  useEffect(() => {
    if (!imageUrl) return;

    const image = new Image();
    image.src = imageUrl;
    imageRef.current = image;

    image.onload = () => {
      if (!canvasRef.current || !containerRef.current) return;

      // Calculate dimensions to maintain aspect ratio
      const containerWidth = containerRef.current.clientWidth;
      const imgAspectRatio = image.width / image.height;
      
      let canvasWidth = containerWidth;
      let canvasHeight = containerWidth / imgAspectRatio;

      if (canvasHeight > 600) {
        canvasHeight = 600;
        canvasWidth = canvasHeight * imgAspectRatio;
      }

      canvasRef.current.width = canvasWidth;
      canvasRef.current.height = canvasHeight;

      drawImage();
    };
  }, [imageUrl]);

  useEffect(() => {
    if (points.length > 0) {
      drawImage();
      drawPolygon();
    }
  }, [points]);

  const drawImage = () => {
    if (!canvasRef.current || !imageRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.drawImage(
      imageRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const drawPolygon = () => {
    if (!canvasRef.current || points.length < 2) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = 'rgba(14, 165, 233, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    // Close the polygon if more than 2 points
    if (points.length > 2) {
      ctx.lineTo(points[0].x, points[0].y);
    }

    ctx.stroke();
    
    // Fill polygon with semi-transparent color
    ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';
    ctx.fill();

    // Draw points
    ctx.fillStyle = 'rgba(14, 165, 233, 0.8)';
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setIsDrawing(true);
    
    // If we're starting a new polygon or clicking near the first point to close
    if (points.length === 0 || 
        (points.length > 2 && 
         Math.abs(x - points[0].x) < 10 && 
         Math.abs(y - points[0].y) < 10)) {
      
      // If we're closing the polygon, calculate area
      if (points.length > 2) {
        calculateArea();
      } else {
        setPoints([...points, { x, y }]);
      }
    } else {
      setPoints([...points, { x, y }]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    drawImage();
    drawPolygon();
    
    // Draw line from last point to current mouse position
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx || points.length === 0) return;
    
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(points[points.length - 1].x, points[points.length - 1].y);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const calculateArea = () => {
    if (points.length < 3) {
      toast({
        title: "Not enough points",
        description: "Please draw a complete shape with at least 3 points",
        variant: "destructive"
      });
      return;
    }
    
    // Calculate area using Shoelace formula
    let area = 0;
    for (let i = 0; i < points.length; i++) {
      const j = (i + 1) % points.length;
      area += points[i].x * points[j].y;
      area -= points[j].x * points[i].y;
    }
    
    area = Math.abs(area) / 2;
    
    // Convert from pixel area to real area using scale
    const realArea = area * (scale * scale);
    
    toast({
      title: "Area calculated",
      description: `Drawn area: ${realArea.toFixed(2)} square meters`
    });
    
    onAreaCalculated(realArea);
    
    // Reset for next drawing
    setIsDrawing(false);
  };

  const handleReset = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawImage();
    setPoints([]);
    setIsDrawing(false);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const area = parseFloat(manualArea);
    
    if (isNaN(area) || area <= 0) {
      toast({
        title: "Invalid area",
        description: "Please enter a valid positive number",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Area set manually",
      description: `Area set to ${area} square meters`
    });
    
    onAreaCalculated(area);
  };

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(e.target.value);
    if (!isNaN(newScale) && newScale > 0) {
      setScale(newScale);
    }
  };

  if (!imageUrl) {
    return (
      <Card className="p-6">
        <div className="text-center text-gray-500">
          <p>Please upload an image to draw on</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="mt-4">
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">Draw Rooftop Area</h3>
                <p className="text-sm text-gray-500">Click to draw, click near first point to complete</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleReset} variant="outline" size="sm">Reset</Button>
                <Button onClick={calculateArea} variant="default" size="sm" disabled={points.length < 3}>
                  Calculate Area
                </Button>
              </div>
            </div>
            
            <div className="canvas-container" ref={containerRef}>
              <canvas
                ref={canvasRef}
                className="border border-dashed border-gray-300 rounded-md"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
              />
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Scale Settings</h3>
              <div className="grid gap-2">
                <Label htmlFor="scale">Scale (meters per pixel)</Label>
                <Input 
                  id="scale" 
                  type="number" 
                  min="0.01" 
                  step="0.01"
                  value={scale} 
                  onChange={handleScaleChange}
                />
                <p className="text-xs text-gray-500">
                  Adjust this value to match your image scale
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Manual Input</h3>
              <form onSubmit={handleManualSubmit} className="grid gap-3">
                <Label htmlFor="manual-area">Area (square meters)</Label>
                <Input
                  id="manual-area"
                  type="number"
                  placeholder="e.g. 50"
                  value={manualArea}
                  onChange={(e) => setManualArea(e.target.value)}
                />
                <Button type="submit" className="w-full">Submit Manual Area</Button>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DrawingCanvas;
