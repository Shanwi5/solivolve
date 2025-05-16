
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Region {
  id: string;
  name: string;
  electricityRate: number;
  solarSubsidy: number;
  taxCredit: number;
}

const regions: Region[] = [
  {
    id: "ca",
    name: "California",
    electricityRate: 0.23,
    solarSubsidy: 0.05,
    taxCredit: 0.30
  },
  {
    id: "ny",
    name: "New York",
    electricityRate: 0.19,
    solarSubsidy: 0.04,
    taxCredit: 0.25
  },
  {
    id: "tx",
    name: "Texas",
    electricityRate: 0.12,
    solarSubsidy: 0.02,
    taxCredit: 0.30
  },
  {
    id: "fl",
    name: "Florida",
    electricityRate: 0.14,
    solarSubsidy: 0.03,
    taxCredit: 0.30
  },
  {
    id: "az",
    name: "Arizona",
    electricityRate: 0.13,
    solarSubsidy: 0.10,
    taxCredit: 0.30
  },
  {
    id: "co",
    name: "Colorado",
    electricityRate: 0.13,
    solarSubsidy: 0.05,
    taxCredit: 0.30
  },
  {
    id: "nv",
    name: "Nevada",
    electricityRate: 0.12,
    solarSubsidy: 0.07,
    taxCredit: 0.30
  },
  {
    id: "wa",
    name: "Washington",
    electricityRate: 0.10,
    solarSubsidy: 0.03,
    taxCredit: 0.30
  }
];

interface RegionSelectorProps {
  onRegionChange: (region: Region) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ onRegionChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Select Your Region</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Choose your location to get accurate electricity rates and subsidy information
            </p>
            <Select 
              defaultValue="ca"
              onValueChange={(value) => {
                const selectedRegion = regions.find(r => r.id === value);
                if (selectedRegion) onRegionChange(selectedRegion);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map(region => (
                  <SelectItem key={region.id} value={region.id}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-xs text-gray-500">Electricity Rate</p>
              <p className="text-xl font-semibold text-solar-blue">${regions[0].electricityRate.toFixed(2)}/kWh</p>
            </div>
            
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-xs text-gray-500">Solar Subsidy</p>
              <p className="text-xl font-semibold text-solar-green">${regions[0].solarSubsidy.toFixed(2)}/kWh</p>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-md">
              <p className="text-xs text-gray-500">Tax Credit</p>
              <p className="text-xl font-semibold text-solar-yellow">{(regions[0].taxCredit * 100).toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionSelector;
