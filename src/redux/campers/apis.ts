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
      queryFn: async (args, _api, _extraOptions, baseQuery) => {
        const result = await baseQuery({ url: '/campers', params: args });

        if (result.error) {
          const status = result.error.status;

          // mockapi.io returns error 404 if no filter result
          if (status === 404) {
            return { data: { items: [], total: 0 } };
          }

          console.error('Campers API query failed:', result.error);
          return result;
        }

        const data = result.data as ApiListResultIntf;
        const isValidData =
          data && typeof data.total === 'number' && Array.isArray(data.items);

        if (!isValidData) {
          console.error(
            'Campers API returned invalid data structure:',
            result.data,
          );
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: 'Malformed response structure received from API',
              data: result.data,
            },
          };
        }

        return { data };
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
