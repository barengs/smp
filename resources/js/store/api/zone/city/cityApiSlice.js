import { apiSlice } from "../../apiSlice";

const cityApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => "kota",
    }),
    getCity: builder.query({
      query: (id) => `kota/${id}`
    })
  }),
  overrideExisting: false,

});

export const { useGetCitiesQuery, useGetCityQuery } = cityApiSlice;