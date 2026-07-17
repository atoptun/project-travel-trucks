import type { CampersFilters } from '@/types';

export const buildCampersQueryArgs = (args: CampersFilters) => {
  const result: CampersFilters = {
    page: args.page,
    limit: args.limit ? args.limit : 4,
  };

  if (args.location) result.location = args.location;
  if (args.form) result.form = args.form;
  if (args.engine) result.engine = args.engine;
  if (args.transmission) result.transmission = args.transmission;

  return result;
};
