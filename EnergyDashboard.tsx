import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download, Trees, Sun, CloudSun } from "lucide-react";
import { generateSolarReport } from "@/services/PDFService";

const EnergyDashboard: React.FC<EnergyDashboardProps> = ({ roofArea }) => {
  // ... existing state and useEffect ...

  const generatePDF = async () => {
    try {
      await generateSolarReport({
        annualEnergy,
        annualSavings,
        co2Offset,
        treeEquivalent,
        monthlyData: data,
        roofArea
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF report. Please try again.');
    }
  };

  // ... rest of the component code ...
}; 