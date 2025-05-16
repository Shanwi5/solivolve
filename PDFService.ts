import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFData {
  annualEnergy: number;
  annualSavings: number;
  co2Offset: number;
  treeEquivalent: number;
  monthlyData: any[];
  roofArea: number;
}

export const generateSolarReport = async (data: PDFData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Title
  doc.setFontSize(24);
  doc.text('Solar Potential Analysis Report', pageWidth / 2, 20, { align: 'center' });
  
  // Summary Section
  doc.setFontSize(16);
  doc.text('Summary', 20, 40);
  
  doc.setFontSize(12);
  doc.text(`Roof Area: ${data.roofArea} m²`, 20, 50);
  doc.text(`Annual Energy Production: ${data.annualEnergy} kWh`, 20, 60);
  doc.text(`Annual Savings: $${data.annualSavings}`, 20, 70);
  doc.text(`CO2 Offset: ${data.co2Offset} kg`, 20, 80);
  doc.text(`Tree Equivalent: ${data.treeEquivalent} trees`, 20, 90);
  
  // Monthly Data Table
  doc.setFontSize(16);
  doc.text('Monthly Energy Production', 20, 110);
  
  const tableData = data.monthlyData.map(month => [
    month.name,
    `${month.energy} kWh`,
    `$${month.savings}`,
    `${month.co2} kg`
  ]);
  
  doc.autoTable({
    startY: 120,
    head: [['Month', 'Energy', 'Savings', 'CO2 Offset']],
    body: tableData,
  });
  
  // Save the PDF
  doc.save('solar-potential-report.pdf');
};

export const captureChartAsImage = async (elementId: string): Promise<string> => {
  const element = document.getElementById(elementId);
  if (!element) return '';
  
  const canvas = await html2canvas(element);
  return canvas.toDataURL('image/png');
}; 