import type { CamperIntf } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_CAMPERS_BASE_URL;

export const fetchCampers = createAsyncThunk<
  CamperIntf[],
  void,
  { rejectValue: string }
  >('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/campers');
    return res.data;
  } catch (error: Error | unknown) {
    return thunkAPI.rejectWithValue(
      (error as Error).message || 'Something went wrong'
    );
  }

  });

export const fetchCamperDetail = createAsyncThunk<
  CamperIntf,
  string,
  { rejectValue: string }
  >('campers/fetchDetail', async (id: string, thunkAPI) => {
  try {
    const res = await axios.get(`/campers/${id}`);
    return res.data;
  } catch (error: Error | unknown) {
    return thunkAPI.rejectWithValue(
      (error as Error).message || 'Something went wrong'
    );
  }

});
