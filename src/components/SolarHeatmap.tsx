import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartPie } from "lucide-react";
import DownloadPDF from "@/components/downloadpdf";
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
import { SolarResults, SolarInputs } from "@/utils/solarCalculator";

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

  // Calculate average annual energy from heatmap data
  const calculateAverageAnnualEnergy = () => {
    if (data.length === 0) return 0;
    const totalEnergy = data.reduce((sum, point) => sum + (point.annualEnergy || 0), 0);
    return totalEnergy / data.length;
  };

  // Create SolarResults object
  const getSolarResults = (): SolarResults => {
    const avgAnnualEnergy = calculateAverageAnnualEnergy();
    return {
      systemSize: roofArea * 0.15, // Assuming 15% of roof area for panels
      panelsRequired: Math.floor(roofArea * 0.15 / 1.6), // Assuming 1.6m² per panel
      annualEnergyProduction: avgAnnualEnergy,
      monthlySavings: avgAnnualEnergy * 0.15 / 12, // Assuming $0.15 per kWh
      paybackPeriod: 8, // Example value
      co2Reduction: avgAnnualEnergy * 0.5, // 0.5 kg CO2 per kWh
      lifetimeSavings: avgAnnualEnergy * 0.15 * 25 // 25 years lifetime
    };
  };

  // Create SolarInputs object
  const getSolarInputs = (): SolarInputs => {
    return {
      location: "Default Location",
      roofArea: roofArea,
      electricityUsage: 1000, // Example value
      roofAngle: 30, // Example value
      shading: 0 // Example value
    };
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
        <div className="h-[250px] w-full overflow-auto">
          <div
            className="grid bg-white"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(data.length))}, 40px)`,
              gridAutoRows: "40px",
              gap: "4px",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            {data.map((point, idx) => (
            <div 
                className="grid mt-4"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(data.length))}, 1fr)`,
                  gridAutoRows: "30px", // increased from 20px
                  gap: "3px"
                }}
              >
              {data.map((point, idx) => (
                <div
                  key={idx}
                  title={`(${point.x}, ${point.y}) = ${point.value.toFixed(1)}%`}
                  style={{
                    backgroundColor: getColor(point.value),
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    fontSize: "12px", // slightly larger
                    color: "#000",
                    borderRadius: "2px"
                  }}
                >
                  {Math.round(point.value)}
                </div>
              ))}
            </div>
    
            ))}
          </div>
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
        <div className="mt-4">
          <DownloadPDF 
            results={getSolarResults()} 
            formData={getSolarInputs()} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarHeatmap;
