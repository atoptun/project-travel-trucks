import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { useGetCampersQuery } from './redux/campers/apis';
import { selectIsFavourite } from './redux/favorites/selectors';
import { toggleFavorite } from './redux/favorites/slice';
import type { AppDispatch, RootState } from './redux/store';
import type {
  CamperEngineType,
  CamperFormType,
  CampersFilters,
  CamperTransmissionType,
} from './types/common';

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
  const filterKey = searchParams.toString();

  const [pageState, setPageState] = useState({
    page: 1,
    lastParams: filterKey,
  });

  const currentPage = pageState.lastParams === filterKey ? pageState.page : 1;

  const filters: CampersFilters = useMemo(() => {
    const result = {
      page: currentPage,
      limit: LIMIT,
      location: searchParams.get('location') ?? undefined,
      form: (searchParams.get('form') as CamperFormType) ?? undefined,
      engine: (searchParams.get('engine') as CamperEngineType) ?? undefined,
      transmission:
        (searchParams.get('transmission') as CamperTransmissionType) ??
        undefined,
    };
    return result;
  }, [searchParams, currentPage]);

  const filtersHash = searchParams.toString();

  const setFilters = (data: Partial<CampersFilters>) => {
    const next = new URLSearchParams();
    if (data.location) next.set('location', data.location);
    if (data.form) next.set('form', data.form);
    if (data.engine) next.set('engine', data.engine);
    if (data.transmission) next.set('transmission', data.transmission);
    setSearchParams(next);
  };

  const loadMore = () => {
    setPageState({
      page: currentPage + 1,
      lastParams: filterKey,
    });
  };

  return { filters, filtersHash, page: currentPage, setFilters, loadMore };
};

// ─── useCampers ────────────────────────────────────────────────────────────────

export const useCampers = () => {
  const { filters } = useFilters();

  return useGetCampersQuery(filters, {
    selectFromResult: ({ data, isFetching, isError, error }) => {
      const items = data?.items ?? [];
      const total = data?.total ?? 0;

      return {
        campers: items,
        hasMore: total > items.length,
        isFetching,
        isError,
        error,
      };
    },
  });
};

// ─── useFavorite ────────────────────────────────────────────────────────────────

export const useFavorite = (camperId: string) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(state =>
    selectIsFavourite(state, camperId),
  );

  const toggle = useCallback(() => {
    dispatch(toggleFavorite(camperId));
  }, [dispatch, camperId]);

  return [isFavorite, toggle] as const;
};
