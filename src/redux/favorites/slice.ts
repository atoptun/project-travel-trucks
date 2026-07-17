import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FavouritesState } from '@/types';

const initialState: FavouritesState = {
  ids: {},
};

const favoritesSlicer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, { payload }: PayloadAction<string>) {
      state.ids[payload] = true;
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      delete state.ids[payload];
    },
  },
});

export default favoritesSlicer.reducer;
