
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import DrawingCanvas from "@/components/DrawingCanvas";
import EnergyDashboard from "@/components/EnergyDashboard";
import RegionSelector from "@/components/RegionSelector";
import WeatherReport from "@/components/WeatherReport";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useTranslation } from "react-i18next";

interface Region {
  id: string;
  name: string;
  electricityRate: number;
  solarSubsidy: number;
  taxCredit: number;
}

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [roofArea, setRoofArea] = useState<number | null>(null);
  const [showEstimator, setShowEstimator] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region>({
    id: "ca",
    name: "California",
    electricityRate: 0.23,
    solarSubsidy: 0.05,
    taxCredit: 0.30
  });
  const { t } = useTranslation();
  
  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setShowEstimator(true);
  };
  
  const handleAreaCalculated = (area: number) => {
    setRoofArea(area);
  };
  
  const handleRegionChange = (region: Region) => {
    setSelectedRegion(region);
  };
  
  const scrollToEstimator = () => {
    document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')} <br />
              <span className="text-solar-blue">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToEstimator}
                size="lg" 
                className="bg-solar-blue hover:bg-solar-darkBlue text-white"
              >
                {t('common.getStarted')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
              >
                <a href="/how-it-works">{t('common.learnMore')}</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full" 
            onClick={scrollToEstimator}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-solar-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-solar-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('features.upload.title')}</h3>
                <p className="text-gray-600">{t('features.upload.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-solar-yellow/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-solar-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('features.draw.title')}</h3>
                <p className="text-gray-600">{t('features.draw.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-solar-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-solar-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('features.analysis.title')}</h3>
                <p className="text-gray-600">{t('features.analysis.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">{t('estimator.title')}</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              {t('estimator.description')}
            </p>
            
            <div className="space-y-6">
              <RegionSelector onRegionChange={handleRegionChange} />
              
              {/* Weather Report based on selected location */}
              <WeatherReport region={selectedRegion.id} />
              
              <ImageUpload onImageUploaded={handleImageUpload} />
              
              {uploadedImage && (
                <DrawingCanvas 
                  imageUrl={uploadedImage}
                  onAreaCalculated={handleAreaCalculated}
                />
              )}
              
              {roofArea && (
                <EnergyDashboard roofArea={roofArea} />
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-solar-blue to-solar-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('cta.description')}
            </p>
            <Button 
              onClick={scrollToEstimator}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-solar-blue"
            >
              {t('cta.button')}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
