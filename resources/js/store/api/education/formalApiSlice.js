import { apiSlice } from "../apiSlice";

const formalEducationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFormalEducations: builder.query({
      query: () => 'formal-education'
    }),
    createFormalEducation: builder.mutation({
      query: (payload) => ({
        url: 'formal-education',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreateFormalEducationMutation, useGetFormalEducationsQuery} = formalEducationApi;