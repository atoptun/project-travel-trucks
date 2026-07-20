import {
  CAMPER_ENGINE,
  CAMPER_FORM,
  CAMPER_TRANSMISSION,
  type CamperEngineType,
  type CamperFormType,
  type CamperTransmissionType,
  type VehicleBadgeConfigItem,
  type VehicleSpecConfigItem,
} from './types/common';

export const CAMPER_FORM_LABELS: Record<CamperFormType, string> = {
  [CAMPER_FORM.ALCOVE]: 'Alcove',
  [CAMPER_FORM.PANEL_TRUCK]: 'Panel Van',
  [CAMPER_FORM.FULLY_INTEGRATED]: 'Integrated',
  [CAMPER_FORM.SEMI_INTEGRATED]: 'Semi Integrated',
};

export const CAMPER_ENGINE_LABELS: Record<CamperEngineType, string> = {
  [CAMPER_ENGINE.DIESEL]: 'Diesel',
  [CAMPER_ENGINE.PETROL]: 'Petrol',
  [CAMPER_ENGINE.HYBRID]: 'Hybrid',
  [CAMPER_ENGINE.ELECTRIC]: 'Electric',
};

export const CAMPER_TRANSMISSION_LABELS: Record<
  CamperTransmissionType,
  string
> = {
  [CAMPER_TRANSMISSION.AUTOMATIC]: 'Automatic',
  [CAMPER_TRANSMISSION.MANUAL]: 'Manual',
};

function formatSpecs(text: string): string {
  // Add space between number and symbol
  return text.replace(/(?<=\d)(?=[a-zA-Z/])/g, ' ');
}

export const VEHICLE_SPECS_CONFIG: VehicleSpecConfigItem[] = [
  {
    key: 'form',
    label: 'Form',
    formatter: (val: unknown) => {
      const form = val as CamperFormType;
      const name = CAMPER_FORM_LABELS[form];
      return name ?? 'Unknown';
    },
  },
  {
    key: 'length',
    label: 'Length',
    formatter: (val: unknown) => formatSpecs(String(val)),
  },
  {
    key: 'width',
    label: 'Width',
    formatter: (val: unknown) => formatSpecs(String(val)),
  },
  {
    key: 'height',
    label: 'Height',
    formatter: (val: unknown) => formatSpecs(String(val)),
  },
  {
    key: 'tank',
    label: 'Tank',
    formatter: (val: unknown) => formatSpecs(String(val)),
  },
  {
    key: 'consumption',
    label: 'Consumption',
    formatter: (val: unknown) => formatSpecs(String(val)),
  },
];

export const VEHICLE_BADGES_CONFIG: VehicleBadgeConfigItem[] = [
  { key: 'transmission', type: 'string', label: 'Unknown' },
  { key: 'engine', type: 'string', label: 'Unknown' },
  { key: 'AC', type: 'boolean', label: 'AC' },
  { key: 'bathroom', type: 'boolean', label: 'Bathroom' },
  { key: 'kitchen', type: 'boolean', label: 'Kitchen' },
  { key: 'TV', type: 'boolean', label: 'TV' },
  { key: 'radio', type: 'boolean', label: 'Radio' },
  { key: 'refrigerator', type: 'boolean', label: 'Refrigerator' },
  { key: 'microwave', type: 'boolean', label: 'Microwave' },
  { key: 'gas', type: 'boolean', label: 'Gas' },
  { key: 'water', type: 'boolean', label: 'Water' },
];
