import { createSelector } from '@reduxjs/toolkit';
import { type AppState } from '../../types'

export const selectCampers = (state: AppState) => state.campers.items;

export const selectCampersLoading = (state: AppState) => state.campers.isLoading;

export const selectCampersError = (state: AppState) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectCampers], //TODO:  + filter
  (campers) => campers
);