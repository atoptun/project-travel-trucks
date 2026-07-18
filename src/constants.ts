import {
  CAMPER_ENGINE,
  CAMPER_FORM,
  CAMPER_TRANSMISSION,
  type CamperEngineType,
  type CamperFormType,
  type CamperTransmissionType,
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
