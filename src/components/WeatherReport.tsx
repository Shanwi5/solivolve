
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData, fetchWeatherData } from "@/services/WeatherAPI";
import { Cloud, CloudDrizzle, CloudRain, CloudSun, Sun, Wind, Thermometer, Droplets } from "lucide-react";
import { useTranslation } from "react-i18next";

interface WeatherReportProps {
  region: string;
}

const WeatherReport: React.FC<WeatherReportProps> = ({ region }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    const loadWeatherData = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData(region);
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to load weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWeatherData();
  }, [region]);

  const getWeatherIcon = (iconName: string) => {
    switch (iconName) {
      case "sun":
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case "cloud":
        return <Cloud className="h-8 w-8 text-gray-400" />;
      case "cloud-sun":
        return <CloudSun className="h-8 w-8 text-blue-400" />;
      case "cloud-rain":
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case "cloud-drizzle":
        return <CloudDrizzle className="h-8 w-8 text-blue-300" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>7-Day Weather Forecast for {weatherData.location}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-col md:flex-row items-center gap-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            {getWeatherIcon(weatherData.current.icon)}
            <div className="ml-4">
              <p className="text-3xl font-bold">{weatherData.current.temperature}°C</p>
              <p className="text-gray-600">{weatherData.current.condition}</p>
            </div>
          </div>
          
          <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Droplets className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="font-medium">{weatherData.current.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Pressure</p>
                <p className="font-medium">{weatherData.current.pressure} hPa</p>
              </div>
            </div>
            <div className="flex items-center">
              <Thermometer className="h-5 w-5 text-red-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="font-medium">{weatherData.current.temperature}°C</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-4">7-Day Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="bg-white p-3 rounded-md border border-gray-100 flex flex-col items-center">
              <p className="font-medium text-gray-700">{day.date}</p>
              <div className="my-2">{getWeatherIcon(day.icon)}</div>
              <p className="font-semibold">{day.maxTemp}°</p>
              <p className="text-gray-500 text-sm">{day.minTemp}°</p>
              <p className="text-xs text-gray-600 mt-1">{day.condition}</p>
              <div className="mt-2 pt-2 border-t border-gray-100 w-full">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-500 flex items-center">
                    <Droplets className="h-3 w-3 mr-1" />
                    {day.humidity}%
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <Wind className="h-3 w-3 mr-1" />
                    {day.pressure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherReport;
