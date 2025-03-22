import { apiSlice } from "../apiSlice";

const parentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParents: builder.query({
      query: () => 'orang-tua'
    }),
    getParent: builder.query({
      query: (id) => `orang-tua/${id}`
    }),
    createParent: builder.mutation({
      query: (data) => ({
        url: 'orang-tua',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {useCreateParentMutation, useGetParentsQuery, useGetParentQuery} = parentApi;