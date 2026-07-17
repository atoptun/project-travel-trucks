import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type CamperIntf, type CampersFilters } from '../../types';

const baseUrl = String(import.meta.env.VITE_CAMPERS_BASE_URL);

interface ApiListResultIntf {
  total: number;
  items: CamperIntf[];
}

export const campersApi = createApi({
  reducerPath: 'campersApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 300,
  endpoints: builder => ({
    getCampers: builder.query<ApiListResultIntf, CampersFilters>({
      // query: args => ({
      //   url: '/campers',
      //   params: args,
      // }),
      queryFn: async (args, _api, _extraOptions, baseQuery) => {
        const result = await baseQuery({ url: '/campers', params: args });

        // mockapi.io returns error 404 if no filter result
        if ('error' in result && result.error?.status === 404) {
          return { data: { items: [], total: 0 } };
        }

        return result;
      },
      serializeQueryArgs: ({ queryArgs }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { page, ...filters } = queryArgs;
        return filters;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) return newItems;

        currentCache.items.push(...newItems.items);
        currentCache.total = newItems.total;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
    getCamperById: builder.query<CamperIntf, string>({
      query: id => `/campers/${id}`,
    }),
  }),
});

export const { useGetCampersQuery, useGetCamperByIdQuery } = campersApi;
