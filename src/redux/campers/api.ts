import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { type CamperIntf } from '../../types';

axios.defaults.baseURL = import.meta.env.VITE_CAMPERS_BASE_URL;

interface ApiListResultIntf {
  total: number;
  items: CamperIntf[];
}

export const campersApi = createApi({
  reducerPath: 'campersApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_CAMPERS_BASE_URL }),
  endpoints: builder => ({
    getCampers: builder.query<ApiListResultIntf, void>({
      query: () => '/campers',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          data.items.forEach(item => {
            dispatch(
              campersApi.util.upsertQueryData('getCamperById', item.id, item),
            );
          });
        } catch (error) {}
      },
    }),
    getCamperById: builder.query<CamperIntf, string>({
      query: id => `/campers/${id}`,
    }),
  }),
});

export const { useGetCampersQuery, useGetCamperByIdQuery } = campersApi;
