import { apiSlice } from "../../apiSlice";

const villageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVillages: builder.query({
      query: () => "desa",
    }),
    getVillage: builder.query({
      query: (id) => `desa/${id}`
    })
  }),
  overrideExisting: false,

});

export const { useGetVillagesQuery, useGetVillageQuery } = villageApiSlice;