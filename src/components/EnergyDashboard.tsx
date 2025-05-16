import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download, Trees, Sun, CloudSun } from "lucide-react";
import jsPDF from 'jspdf';

// Mock data generator
const generateMonthlyData = (roofArea: number) => {
  const efficiency = 0.15; // Solar panel efficiency
  const averageInsolation = 4.5; // kWh/m²/day (average)
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Monthly variations in insolation
  const monthlyFactors = [0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.1, 1.0, 0.8, 0.7, 0.6];
  
  return months.map((month, index) => {
    const insolation = averageInsolation * monthlyFactors[index];
    const dailyEnergy = roofArea * efficiency * insolation; // kWh/day
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][index];
    const monthlyEnergy = dailyEnergy * monthDays;
    const monthlySavings = monthlyEnergy * 0.15; // Assuming $0.15 per kWh
    
    return {
      name: month,
      energy: Math.round(monthlyEnergy),
      savings: Math.round(monthlySavings),
      co2: Math.round(monthlyEnergy * 0.5) // 0.5 kg CO2 per kWh
    };
  });
};

interface EnergyDashboardProps {
  roofArea: number;
}

const EnergyDashboard: React.FC<EnergyDashboardProps> = ({ roofArea }) => {
  const [data, setData] = useState<any[]>([]);
  const [annualEnergy, setAnnualEnergy] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [co2Offset, setCo2Offset] = useState(0);
  const [treeEquivalent, setTreeEquivalent] = useState(0);
  
  useEffect(() => {
    const newData = generateMonthlyData(roofArea);
    setData(newData);
    
    // Calculate annual totals
    const totalEnergy = newData.reduce((sum, month) => sum + month.energy, 0);
    const totalSavings = newData.reduce((sum, month) => sum + month.savings, 0);
    const totalCo2 = newData.reduce((sum, month) => sum + month.co2, 0);
    
    setAnnualEnergy(totalEnergy);
    setAnnualSavings(totalSavings);
    setCo2Offset(totalCo2);
    setTreeEquivalent(Math.round(totalCo2 / 25)); // One tree absorbs ~25kg CO2 per year
  }, [roofArea]);
  
  const generatePDF = () => {
    const pdf = new jsPDF();
    const lineHeight = 10;
    let y = 20;

    // Helper function to add text and increment y position
    const addLine = (text: string, isBold = false) => {
      if (isBold) {
        pdf.setFont('helvetica', 'bold');
      } else {
        pdf.setFont('helvetica', 'normal');
      }
      pdf.text(text, 20, y);
      y += lineHeight;
    };

    // Add content to PDF
    pdf.setFontSize(20);
    addLine('SOLAR ENERGY DASHBOARD REPORT', true);
    
    pdf.setFontSize(12);
    addLine(`Generated on: ${new Date().toLocaleDateString()}`);
    y += 5;

    addLine('ANNUAL SUMMARY', true);
    addLine(`Total Energy Production: ${annualEnergy.toLocaleString()} kWh`);
    addLine(`Financial Savings: $${annualSavings.toLocaleString()}`);
    addLine(`CO₂ Emissions Offset: ${co2Offset.toLocaleString()} kg`);
    addLine(`Equivalent to: ${treeEquivalent} trees planted`);
    y += 5;

    addLine('MONTHLY BREAKDOWN', true);
    data.forEach(month => {
      addLine(`${month.name}: ${month.energy} kWh, $${month.savings}, ${month.co2} kg CO₂`);
    });
    y += 10;

    pdf.setFontSize(10);
    pdf.setTextColor(100);
    addLine('This report is generated based on estimated solar production data.');
    addLine('Actual results may vary based on weather conditions and system performance.');

    // Save the PDF
    pdf.save('Solar_Dashboard_Report.pdf');
  };
  
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-solar-blue/10 to-solar-blue/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-solar-blue flex items-center gap-2">
              <Sun className="h-5 w-5" />
              Annual Energy
            </CardTitle>
            <CardDescription>Estimated production</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{annualEnergy.toLocaleString()} kWh</div>
            <p className="text-sm text-gray-500">Based on your roof area</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-solar-yellow/10 to-solar-yellow/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-solar-yellow flex items-center gap-2">
              <CloudSun className="h-5 w-5" />
              Annual Savings
            </CardTitle>
            <CardDescription>Estimated financial benefit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${annualSavings.toLocaleString()}</div>
            <p className="text-sm text-gray-500">Based on current electricity rates</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-solar-green/10 to-solar-green/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-solar-green flex items-center gap-2">
              <Trees className="h-5 w-5" />
              CO₂ Offset
            </CardTitle>
            <CardDescription>Environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{co2Offset.toLocaleString()} kg</div>
            <p className="text-sm text-gray-500">CO₂ emissions avoided annually</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-solar-green/10 to-solar-green/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-solar-green flex items-center gap-2">
              <Trees className="h-5 w-5" />
              Tree Equivalent
            </CardTitle>
            <CardDescription>Environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{treeEquivalent} trees</div>
            <p className="text-sm text-gray-500">Annual CO₂ absorption equivalent</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Energy Production Analysis</CardTitle>
              <CardDescription>Visualize your solar potential</CardDescription>
            </div>
            <Button onClick={generatePDF} className="bg-solar-blue hover:bg-solar-darkBlue">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="energy" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="energy">Energy Production</TabsTrigger>
              <TabsTrigger value="savings">Financial Savings</TabsTrigger>
              <TabsTrigger value="environmental">Environmental Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="energy" className="mt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} kWh`, 'Energy']} />
                    <Area type="monotone" dataKey="energy" stroke="#0EA5E9" fill="#BAE6FD" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="savings" className="mt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Savings']} />
                    <Bar dataKey="savings" fill="#FACC15" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="environmental" className="mt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} kg`, 'CO₂ Offset']} />
                    <Bar dataKey="co2" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <p className="text-sm text-gray-500">
            These calculations are estimates based on average solar irradiance data for your region.
            Actual results may vary based on specific local conditions, panel efficiency, and installation factors.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnergyDashboard;
