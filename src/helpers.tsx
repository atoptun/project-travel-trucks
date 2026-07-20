import { type ComponentType, Suspense } from 'react';

import { VEHICLE_BADGES_CONFIG, VEHICLE_SPECS_CONFIG } from './constants';
import type { CamperIntf, VehicleBadge, VehicleSpec } from './types/common';

export const withSuspense = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    // TODO: need normal loader
    <Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </Suspense>
  );
};

export const createVehicleBadgesList = (camper: CamperIntf): VehicleBadge[] => {
  const result = VEHICLE_BADGES_CONFIG.map(({ key, type, label }) => {
    const rawValue = camper[key];

    if (type === 'boolean') {
      if (!rawValue) return null;
      return { key, label };
    }

    if (type === 'string' && rawValue) {
      return {
        key,
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        label: String(rawValue),
      };
    }

    return null;
  }).filter(item => item !== null);

  return result;
};

export const createVehicleSpecsList = (camper: CamperIntf): VehicleSpec[] => {
  const result = VEHICLE_SPECS_CONFIG.map(({ key, label, formatter }) => {
    const rawValue = camper[key];
    if (rawValue === undefined || rawValue === null) return null;
    return { label, value: formatter(rawValue) };
  }).filter(item => item !== null);
  return result;
};
