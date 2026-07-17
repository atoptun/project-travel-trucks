import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import type { AppDispatch, RootState } from './redux/store';
import type {
  CamperEngineType,
  CamperFormType,
  CampersFilters,
  CamperTransmissionType,
} from './types';

// Hooks instead of plain `useDispatch` and `useSelector`
// to get the correct types for store's state and dispatch.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
) => useSelector<RootState, TSelected>(selector);

// ─── useFilters ────────────────────────────────────────────────────────────────

const LIMIT = 5;

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const filters: CampersFilters = useMemo(() => {
    const result = {
      page,
      limit: LIMIT,
      location: searchParams.get('location') ?? undefined,
      form: (searchParams.get('form') as CamperFormType) ?? undefined,
      engine: (searchParams.get('engine') as CamperEngineType) ?? undefined,
      transmission:
        (searchParams.get('transmission') as CamperTransmissionType) ??
        undefined,
    };
    return result;
  }, [searchParams, page]);

  const setFilters = (data: Partial<CampersFilters>) => {
    const next = new URLSearchParams();
    if (data.location) next.set('location', data.location);
    if (data.form) next.set('form', data.form);
    if (data.engine) next.set('engine', data.engine);
    if (data.transmission) next.set('transmission', data.transmission);
    setSearchParams(next);
    setPage(1);
  };

  const loadMore = () => {
    console.info('loadMore', page);
    setPage(p => p + 1);
  };

  return { filters, page, setFilters, loadMore, searchParams };
};
