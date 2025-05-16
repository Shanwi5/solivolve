
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartPie } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
  Legend
} from "recharts";

interface SolarHeatmapProps {
  roofArea: number;
}

type HeatmapPoint = {
  x: number;
  y: number;
  value: number;
  name: string;
  annualEnergy?: number;
};

const SolarHeatmap: React.FC<SolarHeatmapProps> = ({ roofArea }) => {
  const { t } = useTranslation();
  const [visualizationType, setVisualizationType] = useState<"potential" | "efficiency" | "cost" | "annual">("annual");
  const [data, setData] = useState<HeatmapPoint[]>([]);

  // Generate heatmap data based on roof area and visualization type
  useEffect(() => {
    // This would typically come from an API based on real calculations
    // For demo purposes, we're generating synthetic data
    const generateHeatmapData = () => {
      const points: HeatmapPoint[] = [];
      const gridSize = Math.ceil(Math.sqrt(roofArea) / 2);
      
      // Create a grid of points
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          let value = 0;
          let annualEnergy = 0;
          
          // Different algorithms for different visualization types
          switch(visualizationType) {
            case "annual":
              // Annual energy production patterns
              value = 80 - (Math.abs(x - gridSize/2) * 5) - (Math.abs(y - gridSize/2) * 3);
              // Calculate annual kWh based on position and value
              annualEnergy = (value / 100) * 1200 * (roofArea / (gridSize * gridSize));
              break;
            case "potential":
              // Higher values in center, decreasing toward edges
              value = 100 - (Math.abs(x - gridSize/2) + Math.abs(y - gridSize/2)) * 10;
              break;
            case "efficiency":
              // Random efficiency pattern with some areas better than others
              value = 50 + Math.sin(x/2) * 20 + Math.cos(y/2) * 20;
              break;
            case "cost":
              // Cost decreasing with scale (more panels = cheaper per unit)
              value = 100 - (x + y) / (gridSize * 2) * 50;
              break;
          }
          
          // Clamp values between 0-100 and add some randomness
          value = Math.max(0, Math.min(100, value + (Math.random() * 10 - 5)));
          
          points.push({
            x: x * 10, 
            y: y * 10,
            value,
            name: `Point ${x},${y}`,
            annualEnergy: annualEnergy ? Math.round(annualEnergy) : undefined
          });
        }
      }
      
      return points;
    };
    
    setData(generateHeatmapData());
  }, [roofArea, visualizationType]);

  // Map value to color
  const getColor = (value: number) => {
    if (value > 80) return "#9b87f5"; // High potential - bright purple
    if (value > 60) return "#7E69AB"; // Good potential - medium purple
    if (value > 40) return "#FEF7CD"; // Medium potential - soft yellow
    if (value > 20) return "#FEC6A1"; // Low potential - soft orange
    return "#FFDEE2"; // Very low potential - soft pink
  };

  const getLabelByType = () => {
    switch(visualizationType) {
      case "annual": return t("heatmap.annualEnergy", "Annual Energy Production");
      case "potential": return t("heatmap.solarPotential", "Solar Potential");
      case "efficiency": return t("heatmap.efficiency", "Panel Efficiency");
      case "cost": return t("heatmap.costEffectiveness", "Cost Effectiveness");
      default: return "";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <ChartPie className="h-5 w-5" />
          <CardTitle className="text-lg">{t("heatmap.title", "Solar Heatmap Analysis")}</CardTitle>
        </div>
        <Select 
          defaultValue={visualizationType}
          onValueChange={(value) => setVisualizationType(value as any)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("heatmap.selectVisualization", "Select view")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="annual">{t("heatmap.annualEnergy", "Annual Energy Production")}</SelectItem>
            <SelectItem value="potential">{t("heatmap.solarPotential", "Solar Potential")}</SelectItem>
            <SelectItem value="efficiency">{t("heatmap.efficiency", "Panel Efficiency")}</SelectItem>
            <SelectItem value="cost">{t("heatmap.costEffectiveness", "Cost Effectiveness")}</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            {visualizationType === "annual" 
              ? t("heatmap.annualDescription", "Visualization of estimated annual solar energy production across your roof surface in kWh.")
              : t("heatmap.description", "Visual representation of solar energy potential across your roof surface.")}
          </p>
        </div>
        
        <div className="h-[350px] w-full">
          <ChartContainer
            config={{
              high: {
                label: "High",
                color: "#9b87f5"
              },
              medium: {
                label: "Medium",
                color: "#FEF7CD"
              },
              low: {
                label: "Low",
                color: "#FFDEE2"
              }
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 10, right: 30, left: 5, bottom: 30 }}
              >
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="X" 
                  tickCount={5} 
                  tickFormatter={(value) => `${value}`} 
                  label={{ 
                    value: t("heatmap.eastWest", "East-West"), 
                    position: "bottom" 
                  }}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Y" 
                  tickCount={5} 
                  tickFormatter={(value) => `${value}`} 
                  label={{ 
                    value: t("heatmap.northSouth", "North-South"), 
                    angle: -90, 
                    position: "left" 
                  }}
                />
                <ZAxis 
                  type="number" 
                  dataKey="value" 
                  range={[100, 800]} 
                  name={getLabelByType()} 
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as HeatmapPoint;
                      return (
                        <div className="bg-background border rounded-lg shadow-sm p-2 text-xs">
                          <p className="font-medium">{getLabelByType()}</p>
                          <p>{t("heatmap.value", "Value")}: {data.value.toFixed(1)}%</p>
                          {data.annualEnergy && visualizationType === "annual" && (
                            <p>{t("heatmap.annualEnergy", "Annual Energy")}: {data.annualEnergy} kWh</p>
                          )}
                          <p>{t("heatmap.position", "Position")}: ({data.x}, {data.y})</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Scatter name={getLabelByType()} data={data}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-5 gap-1">
          <div className="text-center text-xs">
            <div className="h-2 bg-[#FFDEE2] w-full"></div>
            <span>0%</span>
          </div>
          <div className="text-center text-xs">
            <div className="h-2 bg-[#FEC6A1] w-full"></div>
            <span>25%</span>
          </div>
          <div className="text-center text-xs">
            <div className="h-2 bg-[#FEF7CD] w-full"></div>
            <span>50%</span>
          </div>
          <div className="text-center text-xs">
            <div className="h-2 bg-[#7E69AB] w-full"></div>
            <span>75%</span>
          </div>
          <div className="text-center text-xs">
            <div className="h-2 bg-[#9b87f5] w-full"></div>
            <span>100%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarHeatmap;
