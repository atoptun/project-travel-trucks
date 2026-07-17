import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FavouritesState } from '@/types';

const initialState: FavouritesState = {
  ids: {},
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, { payload }: PayloadAction<string>) {
      if (state.ids[payload]) {
        delete state.ids[payload];
      } else {
        state.ids[payload] = true;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
