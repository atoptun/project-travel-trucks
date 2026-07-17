// import type { AppState } from '@/types';
import { type RootState } from '@/redux/store';

export const selectFavourites = (state: RootState) => state.favorites.ids;

export const selectIsFavourite = (id: string) => (state: RootState) =>
  Boolean(state.favorites.ids[id]);
