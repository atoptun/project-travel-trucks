// Camper types

export interface CamperIntf {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GaleryImageIntf[];
  reviews: ReviewIntf[];
}

export interface GaleryImageIntf {
  thumb: string;
  original: string;
}

export interface ReviewIntf {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

// Filter types

type ValueOf<T> = T[keyof T];

export const CAMPER_FORM = {
  ALCOVE: 'alcove',
  PANEL_TRUCK: 'panelTruck',
  FULLY_INTEGRATED: 'fullyIntegrated',
  SEMI_INTEGRATED: 'semiIntegrated',
} as const;

export type CamperFormType = ValueOf<typeof CAMPER_FORM>;

export const CAMPER_ENGINE = {
  DIESEL: 'diesel',
  PETROL: 'petrol',
  HYBRID: 'hybrid',
  ELECTRIC: 'electric',
} as const;

export type CamperEngineType = ValueOf<typeof CAMPER_ENGINE>;

export const CAMPER_TRANSMISSION = {
  AUTOMATIC: 'automatic',
  MANUAL: 'manual',
} as const;

export type CamperTransmissionType = ValueOf<typeof CAMPER_TRANSMISSION>;

export interface CampersFilters {
  page: number;
  limit: number;

  location?: string;
  form?: CamperFormType;
  engine?: CamperEngineType;
  transmission?: CamperTransmissionType;
}

// Favourites types

export interface FavouritesState {
  ids: Record<string, boolean>;
}

// Vehicle specs

export interface VehicleSpecConfigItem {
  key: keyof CamperIntf;
  label: string;
  formatter: (val: unknown) => string;
}

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface VehicleBadgeConfigItem {
  key: keyof CamperIntf;
  type: 'string' | 'boolean';
  label: string;
}

export interface VehicleBadge {
  key: keyof CamperIntf;
  label: string;
}
