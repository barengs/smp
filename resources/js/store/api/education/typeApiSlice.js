import { apiSlice } from "../apiSlice";

const educationTypeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEducationTypes: builder.query({
      query: () => 'education-type'
    }),
    createEducationType: builder.mutation({
      query: (payload) => ({
        url: 'education-type',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreateEducationTypeMutation, useGetEducationTypesQuery} = educationTypeApi;