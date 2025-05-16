import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface Region {
  id: string;
  name: string;
  electricityRate: number;
  solarSubsidy: number;
  taxCredit: number;
  type: 'state' | 'district';
  parentId?: string;
}

// Indian states and districts data
const indianRegions: Region[] = [
  // States
  {
    id: "mh",
    name: "Maharashtra",
    electricityRate: 0.12,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "ka",
    name: "Karnataka",
    electricityRate: 0.11,
    solarSubsidy: 0.25,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "tn",
    name: "Tamil Nadu",
    electricityRate: 0.10,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "gj",
    name: "Gujarat",
    electricityRate: 0.11,
    solarSubsidy: 0.35,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "rj",
    name: "Rajasthan",
    electricityRate: 0.09,
    solarSubsidy: 0.40,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "dl",
    name: "Delhi",
    electricityRate: 0.13,
    solarSubsidy: 0.35,
    taxCredit: 0.25,
    type: 'state'
  },
  {
    id: "hr",
    name: "Haryana",
    electricityRate: 0.11,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "pb",
    name: "Punjab",
    electricityRate: 0.10,
    solarSubsidy: 0.35,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    electricityRate: 0.09,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'state'
  },
  {
    id: "mp",
    name: "Madhya Pradesh",
    electricityRate: 0.10,
    solarSubsidy: 0.35,
    taxCredit: 0.20,
    type: 'state'
  },
  // Districts for Maharashtra
  {
    id: "mh-mumbai",
    name: "Mumbai",
    electricityRate: 0.13,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'mh'
  },
  {
    id: "mh-pune",
    name: "Pune",
    electricityRate: 0.12,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'mh'
  },
  {
    id: "mh-nagpur",
    name: "Nagpur",
    electricityRate: 0.11,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'mh'
  },
  // Districts for Karnataka
  {
    id: "ka-bangalore",
    name: "Bangalore",
    electricityRate: 0.12,
    solarSubsidy: 0.25,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'ka'
  },
  {
    id: "ka-mysore",
    name: "Mysore",
    electricityRate: 0.11,
    solarSubsidy: 0.25,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'ka'
  },
  {
    id: "ka-hubli",
    name: "Hubli",
    electricityRate: 0.10,
    solarSubsidy: 0.25,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'ka'
  },
  // Districts for Tamil Nadu
  {
    id: "tn-chennai",
    name: "Chennai",
    electricityRate: 0.11,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'tn'
  },
  {
    id: "tn-coimbatore",
    name: "Coimbatore",
    electricityRate: 0.10,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'tn'
  },
  {
    id: "tn-madurai",
    name: "Madurai",
    electricityRate: 0.10,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'tn'
  },
  // Districts for Gujarat
  {
    id: "gj-ahmedabad",
    name: "Ahmedabad",
    electricityRate: 0.12,
    solarSubsidy: 0.35,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'gj'
  },
  {
    id: "gj-surat",
    name: "Surat",
    electricityRate: 0.11,
    solarSubsidy: 0.35,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'gj'
  },
  // Districts for Rajasthan
  {
    id: "rj-jaipur",
    name: "Jaipur",
    electricityRate: 0.10,
    solarSubsidy: 0.40,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'rj'
  },
  {
    id: "rj-jodhpur",
    name: "Jodhpur",
    electricityRate: 0.09,
    solarSubsidy: 0.40,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'rj'
  },
  // Districts for Delhi
  {
    id: "dl-newdelhi",
    name: "New Delhi",
    electricityRate: 0.14,
    solarSubsidy: 0.35,
    taxCredit: 0.25,
    type: 'district',
    parentId: 'dl'
  },
  {
    id: "dl-gurgaon",
    name: "Gurgaon",
    electricityRate: 0.13,
    solarSubsidy: 0.35,
    taxCredit: 0.25,
    type: 'district',
    parentId: 'dl'
  },
  // Districts for Haryana
  {
    id: "hr-faridabad",
    name: "Faridabad",
    electricityRate: 0.12,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'hr'
  },
  {
    id: "hr-panchkula",
    name: "Panchkula",
    electricityRate: 0.11,
    solarSubsidy: 0.30,
    taxCredit: 0.20,
    type: 'district',
    parentId: 'hr'
  }
];

interface RegionSelectorProps {
  onRegionChange: (region: Region) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ onRegionChange }) => {
  const [selectedStateId, setSelectedStateId] = useState<string>("");
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const { t } = useTranslation();
  
  const states = indianRegions.filter(region => region.type === 'state');
  const districts = indianRegions.filter(region => 
    region.type === 'district' && region.parentId === selectedStateId
  );

  const handleStateChange = (value: string) => {
    setSelectedStateId(value);
    setSelectedDistrictId("");
    const state = indianRegions.find(r => r.id === value);
    if (state) onRegionChange(state);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrictId(value);
    const district = indianRegions.find(r => r.id === value);
    if (district) onRegionChange(district);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t('regionSelector.title', 'Select Your Location')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {t('regionSelector.stateDescription', 'Select your state')}
            </p>
            <Select 
              value={selectedStateId}
              onValueChange={handleStateChange}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('regionSelector.selectState', 'Select state')} />
              </SelectTrigger>
              <SelectContent>
                {states.map(state => (
                  <SelectItem key={state.id} value={state.id}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {selectedStateId && (
            <div>
              <p className="text-sm text-gray-500 mb-2">
                {t('regionSelector.districtDescription', 'Select your district')}
              </p>
              <Select 
                value={selectedDistrictId}
                onValueChange={handleDistrictChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('regionSelector.selectDistrict', 'Select district')} />
                </SelectTrigger>
                <SelectContent>
                  {districts.map(district => (
                    <SelectItem key={district.id} value={district.id}>
                      {district.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {(selectedStateId || selectedDistrictId) && (
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">{t('regionSelector.electricityRate', 'Electricity Rate')}</p>
              <p className="text-lg font-semibold">
                ₹{(indianRegions.find(r => r.id === (selectedDistrictId || selectedStateId))?.electricityRate || 0).toFixed(2)}/kWh
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t('regionSelector.solarSubsidy', 'Solar Subsidy')}</p>
              <p className="text-lg font-semibold">
                {(indianRegions.find(r => r.id === (selectedDistrictId || selectedStateId))?.solarSubsidy || 0) * 100}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t('regionSelector.taxCredit', 'Tax Credit')}</p>
              <p className="text-lg font-semibold">
                {(indianRegions.find(r => r.id === (selectedDistrictId || selectedStateId))?.taxCredit || 0) * 100}%
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RegionSelector;
