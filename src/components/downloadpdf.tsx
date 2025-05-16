import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SolarResults, SolarInputs } from "@/utils/solarCalculator";
import { useToast } from "@/hooks/use-toast";

interface PdfGeneratorProps {
  results: SolarResults;
  formData: SolarInputs;
}

const PdfGenerator: React.FC<PdfGeneratorProps> = ({ results, formData }) => {
  const { toast } = useToast();

  const generatePDF = () => {
    // In a real application, we would use a PDF library like jspdf or pdfmake
    // For this demo, we'll create a simple text representation and download it
    
    // Format currency
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(value);
    };

    // Create text content
    const content = `
SOLIVOLVE SOLAR CALCULATION REPORT
===================================
Generated on: ${new Date().toLocaleDateString()}

LOCATION INFORMATION
-------------------
Location: ${formData.location}
Roof Area: ${formData.roofArea} m²
Monthly Electricity Usage: ${formData.electricityUsage} kWh
Roof Angle: ${formData.roofAngle || 'Not specified'} degrees
Roof Shading: ${formData.shading || 'Not specified'} %

SOLAR POTENTIAL RESULTS
----------------------
System Size: ${results.systemSize.toFixed(2)} kW
Number of Panels: ${results.panelsRequired}
Annual Energy Production: ${Math.round(results.annualEnergyProduction).toLocaleString()} kWh
Monthly Savings: ${formatCurrency(results.monthlySavings)}
Payback Period: ${results.paybackPeriod.toFixed(1)} years
CO₂ Reduction: ${Math.round(results.co2Reduction).toLocaleString()} kg per year
Lifetime Savings: ${formatCurrency(results.lifetimeSavings)} (over 25 years)

ENVIRONMENTAL IMPACT
------------------
Annual CO₂ Savings: ${Math.round(results.co2Reduction).toLocaleString()} kg
Equivalent to Planting: ${Math.round(results.co2Reduction / 21)} trees
25-Year CO₂ Savings: ${Math.round(results.co2Reduction * 25).toLocaleString()} kg

This report is an estimate based on the information provided and typical solar conditions.
Actual results may vary based on installation details, weather patterns, and energy usage.

For more information, visit solivolve.com
    `;

    // Create a Blob with the text content
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Solivolve_Solar_Report_${formData.location.replace(/,?\s+/g, '_')}.txt`;
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Report Downloaded",
      description: "Your solar estimate report has been downloaded.",
    });
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      className="border-solar-green-400 text-solar-green-700 hover:bg-solar-green-50"
      onClick={generatePDF}
    >
      <Download className="h-4 w-4 mr-1" /> Download Report
    </Button>
  );
};

export default PdfGenerator;
