import { apiSlice } from "../apiSlice";

const hostelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHostels: builder.query({
      query: () => 'hostel'
    }),
    createHostel: builder.mutation({
      query: (payload) => ({
        url: 'hostel',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreateHostelMutation, useGetHostelsQuery} = hostelApi;