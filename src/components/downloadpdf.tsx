import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SolarResults, SolarInputs } from "@/utils/solarCalculator";
import { useToast } from "@/hooks/use-toast";
import jsPDF from 'jspdf';

interface PdfGeneratorProps {
  results: SolarResults;
  formData: SolarInputs;
}

const PdfGenerator: React.FC<PdfGeneratorProps> = ({ results, formData }) => {
  const { toast } = useToast();

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

    // Format currency
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(value);
    };

    // Add content to PDF
    pdf.setFontSize(20);
    addLine('SOLIVOLVE SOLAR CALCULATION REPORT', true);
    
    pdf.setFontSize(12);
    addLine(`Generated on: ${new Date().toLocaleDateString()}`);
    y += 5;

    addLine('LOCATION INFORMATION', true);
    addLine(`Location: ${formData.location}`);
    addLine(`Roof Area: ${formData.roofArea} m²`);
    addLine(`Monthly Electricity Usage: ${formData.electricityUsage} kWh`);
    addLine(`Roof Angle: ${formData.roofAngle || 'Not specified'} degrees`);
    addLine(`Roof Shading: ${formData.shading || 'Not specified'} %`);
    y += 5;

    addLine('SOLAR POTENTIAL RESULTS', true);
    addLine(`System Size: ${results.systemSize.toFixed(2)} kW`);
    addLine(`Number of Panels: ${results.panelsRequired}`);
    addLine(`Annual Energy Production: ${Math.round(results.annualEnergyProduction).toLocaleString()} kWh`);
    addLine(`Monthly Savings: ${formatCurrency(results.monthlySavings)}`);
    addLine(`Payback Period: ${results.paybackPeriod.toFixed(1)} years`);
    addLine(`Lifetime Savings: ${formatCurrency(results.lifetimeSavings)} (over 25 years)`);
    y += 5;

    addLine('ENVIRONMENTAL IMPACT', true);
    addLine(`Annual CO₂ Savings: ${Math.round(results.co2Reduction).toLocaleString()} kg`);
    addLine(`Equivalent to Planting: ${Math.round(results.co2Reduction / 21)} trees`);
    addLine(`25-Year CO₂ Savings: ${Math.round(results.co2Reduction * 25).toLocaleString()} kg`);
    y += 10;

    pdf.setFontSize(10);
    pdf.setTextColor(100);
    addLine('This report is an estimate based on the information provided and typical solar conditions.');
    addLine('Actual results may vary based on installation details, weather patterns, and energy usage.');
    addLine('For more information, visit solivolve.com');

    // Save the PDF
    pdf.save(`Solivolve_Solar_Report_${formData.location.replace(/,?\s+/g, '_')}.pdf`);
    
    toast({
      title: "Report Downloaded",
      description: "Your solar estimate report has been downloaded as PDF.",
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
