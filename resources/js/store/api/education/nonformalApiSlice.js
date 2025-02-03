import { apiSlice } from "../apiSlice";

const nonFormalEducationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNonFormalEducations: builder.query({
      query: () => 'nonformal-education'
    }),
    createNonFormalEducation: builder.mutation({
      query: (payload) => ({
        url: 'nonformal-education',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreateNonFormalEducationMutation, useGetNonFormalEducationsQuery} = nonFormalEducationApi;