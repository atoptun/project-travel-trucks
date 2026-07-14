import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type FiltersState } from '@/types';

const initialState: FiltersState = {
  city: null,
  form: null,
  engine: null,
  transmission: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, { payload }: PayloadAction<Partial<FiltersState>>) {
      Object.assign(state, payload);
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
