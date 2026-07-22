// import type { AppState } from '@/types';
import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from '@/redux/store';

export const selectFavoritesState = (state: RootState) => state.favorites;

export const selectFavoritesIds = createSelector(
  [selectFavoritesState],
  favorites => favorites.ids,
);

export const selectIsFavourite = createSelector(
  [selectFavoritesIds, (_state: RootState, id: string) => id],
  (ids, id) => Boolean(ids[id]),
);
