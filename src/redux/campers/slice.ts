import type { CampersState } from '@/types';
import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { fetchCamperDetail, fetchCampers } from './operations';

const initialState: CampersState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlicer = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state: CampersState, {payload}) => {
        state.items = payload;
      })
      .addCase(fetchCamperDetail.fulfilled, (state: CampersState, {payload}) => {
        state.items.push(payload);
      })
      .addMatcher(isPending, (state: CampersState) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilled, (state: CampersState) => {
        state.isLoading = false;
        state.error = null;
      })
    .addMatcher(isRejected, (state: CampersState, {error}) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
  },
});

export default campersSlicer.reducer;
