
import { toast } from "sonner";

export interface WeatherData {
  location: string;
  current: {
    temperature: number;
    humidity: number;
    pressure: number;
    condition: string;
    icon: string;
  };
  forecast: Array<{
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
    icon: string;
    humidity: number;
    pressure: number;
  }>;
}

// This is a mock API service that returns weather data
// In a real application, this would fetch data from a weather API
export const fetchWeatherData = async (region: string): Promise<WeatherData> => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock data based on region
    const mockData: Record<string, WeatherData> = {
      "ca": {
        location: "California",
        current: {
          temperature: 23,
          humidity: 45,
          pressure: 1012,
          condition: "Sunny",
          icon: "sun"
        },
        forecast: [
          { date: "Mon", maxTemp: 24, minTemp: 15, condition: "Sunny", icon: "sun", humidity: 40, pressure: 1012 },
          { date: "Tue", maxTemp: 26, minTemp: 16, condition: "Sunny", icon: "sun", humidity: 38, pressure: 1011 },
          { date: "Wed", maxTemp: 25, minTemp: 16, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 45, pressure: 1010 },
          { date: "Thu", maxTemp: 22, minTemp: 14, condition: "Cloudy", icon: "cloud", humidity: 60, pressure: 1009 },
          { date: "Fri", maxTemp: 20, minTemp: 13, condition: "Rainy", icon: "cloud-rain", humidity: 70, pressure: 1008 },
          { date: "Sat", maxTemp: 19, minTemp: 12, condition: "Rainy", icon: "cloud-rain", humidity: 75, pressure: 1007 },
          { date: "Sun", maxTemp: 21, minTemp: 13, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 65, pressure: 1009 }
        ]
      },
      "ny": {
        location: "New York",
        current: {
          temperature: 18,
          humidity: 60,
          pressure: 1014,
          condition: "Cloudy",
          icon: "cloud"
        },
        forecast: [
          { date: "Mon", maxTemp: 19, minTemp: 12, condition: "Cloudy", icon: "cloud", humidity: 65, pressure: 1014 },
          { date: "Tue", maxTemp: 21, minTemp: 13, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 60, pressure: 1013 },
          { date: "Wed", maxTemp: 22, minTemp: 14, condition: "Sunny", icon: "sun", humidity: 55, pressure: 1013 },
          { date: "Thu", maxTemp: 20, minTemp: 13, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 58, pressure: 1012 },
          { date: "Fri", maxTemp: 18, minTemp: 11, condition: "Rainy", icon: "cloud-rain", humidity: 70, pressure: 1011 },
          { date: "Sat", maxTemp: 17, minTemp: 10, condition: "Rainy", icon: "cloud-rain", humidity: 75, pressure: 1010 },
          { date: "Sun", maxTemp: 19, minTemp: 11, condition: "Cloudy", icon: "cloud", humidity: 68, pressure: 1011 }
        ]
      },
      "tx": {
        location: "Texas",
        current: {
          temperature: 30,
          humidity: 35,
          pressure: 1010,
          condition: "Hot",
          icon: "sun"
        },
        forecast: [
          { date: "Mon", maxTemp: 31, minTemp: 22, condition: "Hot", icon: "sun", humidity: 30, pressure: 1010 },
          { date: "Tue", maxTemp: 32, minTemp: 23, condition: "Hot", icon: "sun", humidity: 28, pressure: 1009 },
          { date: "Wed", maxTemp: 33, minTemp: 23, condition: "Hot", icon: "sun", humidity: 25, pressure: 1008 },
          { date: "Thu", maxTemp: 30, minTemp: 21, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 40, pressure: 1009 },
          { date: "Fri", maxTemp: 29, minTemp: 20, condition: "Cloudy", icon: "cloud", humidity: 45, pressure: 1010 },
          { date: "Sat", maxTemp: 30, minTemp: 21, condition: "Sunny", icon: "sun", humidity: 35, pressure: 1011 },
          { date: "Sun", maxTemp: 31, minTemp: 22, condition: "Sunny", icon: "sun", humidity: 30, pressure: 1010 }
        ]
      },
      "fl": {
        location: "Florida",
        current: {
          temperature: 28,
          humidity: 70,
          pressure: 1008,
          condition: "Humid",
          icon: "cloud-sun"
        },
        forecast: [
          { date: "Mon", maxTemp: 29, minTemp: 23, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 75, pressure: 1008 },
          { date: "Tue", maxTemp: 30, minTemp: 24, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 78, pressure: 1007 },
          { date: "Wed", maxTemp: 29, minTemp: 23, condition: "Rainy", icon: "cloud-rain", humidity: 85, pressure: 1006 },
          { date: "Thu", maxTemp: 28, minTemp: 22, condition: "Rainy", icon: "cloud-rain", humidity: 80, pressure: 1007 },
          { date: "Fri", maxTemp: 29, minTemp: 23, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 75, pressure: 1008 },
          { date: "Sat", maxTemp: 30, minTemp: 24, condition: "Sunny", icon: "sun", humidity: 70, pressure: 1009 },
          { date: "Sun", maxTemp: 31, minTemp: 24, condition: "Sunny", icon: "sun", humidity: 65, pressure: 1010 }
        ]
      },
      "az": {
        location: "Arizona",
        current: {
          temperature: 33,
          humidity: 20,
          pressure: 1009,
          condition: "Dry",
          icon: "sun"
        },
        forecast: [
          { date: "Mon", maxTemp: 34, minTemp: 20, condition: "Hot", icon: "sun", humidity: 15, pressure: 1009 },
          { date: "Tue", maxTemp: 35, minTemp: 21, condition: "Hot", icon: "sun", humidity: 10, pressure: 1008 },
          { date: "Wed", maxTemp: 36, minTemp: 22, condition: "Hot", icon: "sun", humidity: 12, pressure: 1007 },
          { date: "Thu", maxTemp: 35, minTemp: 21, condition: "Hot", icon: "sun", humidity: 15, pressure: 1008 },
          { date: "Fri", maxTemp: 33, minTemp: 19, condition: "Sunny", icon: "sun", humidity: 18, pressure: 1009 },
          { date: "Sat", maxTemp: 32, minTemp: 18, condition: "Sunny", icon: "sun", humidity: 20, pressure: 1010 },
          { date: "Sun", maxTemp: 33, minTemp: 19, condition: "Sunny", icon: "sun", humidity: 18, pressure: 1009 }
        ]
      },
      "co": {
        location: "Colorado",
        current: {
          temperature: 15,
          humidity: 40,
          pressure: 1012,
          condition: "Cool",
          icon: "cloud"
        },
        forecast: [
          { date: "Mon", maxTemp: 16, minTemp: 5, condition: "Cloudy", icon: "cloud", humidity: 45, pressure: 1012 },
          { date: "Tue", maxTemp: 18, minTemp: 6, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 40, pressure: 1013 },
          { date: "Wed", maxTemp: 20, minTemp: 8, condition: "Sunny", icon: "sun", humidity: 35, pressure: 1014 },
          { date: "Thu", maxTemp: 19, minTemp: 7, condition: "Sunny", icon: "sun", humidity: 30, pressure: 1015 },
          { date: "Fri", maxTemp: 15, minTemp: 4, condition: "Cloudy", icon: "cloud", humidity: 50, pressure: 1013 },
          { date: "Sat", maxTemp: 13, minTemp: 2, condition: "Rainy", icon: "cloud-rain", humidity: 60, pressure: 1011 },
          { date: "Sun", maxTemp: 14, minTemp: 3, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 55, pressure: 1012 }
        ]
      },
      "nv": {
        location: "Nevada",
        current: {
          temperature: 25,
          humidity: 15,
          pressure: 1010,
          condition: "Dry",
          icon: "sun"
        },
        forecast: [
          { date: "Mon", maxTemp: 26, minTemp: 15, condition: "Sunny", icon: "sun", humidity: 10, pressure: 1010 },
          { date: "Tue", maxTemp: 27, minTemp: 16, condition: "Sunny", icon: "sun", humidity: 12, pressure: 1009 },
          { date: "Wed", maxTemp: 28, minTemp: 17, condition: "Sunny", icon: "sun", humidity: 15, pressure: 1008 },
          { date: "Thu", maxTemp: 29, minTemp: 18, condition: "Hot", icon: "sun", humidity: 14, pressure: 1007 },
          { date: "Fri", maxTemp: 27, minTemp: 16, condition: "Sunny", icon: "sun", humidity: 16, pressure: 1008 },
          { date: "Sat", maxTemp: 26, minTemp: 15, condition: "Sunny", icon: "sun", humidity: 18, pressure: 1009 },
          { date: "Sun", maxTemp: 25, minTemp: 14, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 20, pressure: 1010 }
        ]
      },
      "wa": {
        location: "Washington",
        current: {
          temperature: 14,
          humidity: 75,
          pressure: 1013,
          condition: "Rainy",
          icon: "cloud-rain"
        },
        forecast: [
          { date: "Mon", maxTemp: 15, minTemp: 10, condition: "Rainy", icon: "cloud-rain", humidity: 80, pressure: 1013 },
          { date: "Tue", maxTemp: 16, minTemp: 11, condition: "Cloudy", icon: "cloud", humidity: 75, pressure: 1014 },
          { date: "Wed", maxTemp: 18, minTemp: 12, condition: "Partly Cloudy", icon: "cloud-sun", humidity: 70, pressure: 1015 },
          { date: "Thu", maxTemp: 17, minTemp: 11, condition: "Cloudy", icon: "cloud", humidity: 75, pressure: 1014 },
          { date: "Fri", maxTemp: 15, minTemp: 10, condition: "Rainy", icon: "cloud-rain", humidity: 80, pressure: 1013 },
          { date: "Sat", maxTemp: 14, minTemp: 9, condition: "Rainy", icon: "cloud-rain", humidity: 85, pressure: 1012 },
          { date: "Sun", maxTemp: 16, minTemp: 10, condition: "Cloudy", icon: "cloud", humidity: 75, pressure: 1013 }
        ]
      }
    };
    
    // Return data based on region or default to California
    return mockData[region] || mockData["ca"];
  } catch (error) {
    console.error("Error fetching weather data:", error);
    toast.error("Failed to fetch weather data");
    throw error;
  }
};
