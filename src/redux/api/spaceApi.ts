import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Space {
  id: string;
  name: string;
  description: string;
  [key: string]: any;
}

export const spaceApi = createApi({
  reducerPath: 'spaceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/',
  }),
  endpoints: (builder) => ({
    getAllSpaces: builder.query<Space[], void>({
      query: () => 'data.json',
    }),
  }),
});

export const { useGetAllSpacesQuery } = spaceApi;
