import { apiSlice } from "../apiSlice";

const attendantApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAttendants: builder.query({
      query: () => 'attendant'
    }),
    createAttendant: builder.mutation({
      query: (data) => ({
        url: 'attendant',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {useCreateAttendantMutation, useGetAttendantsQuery} = attendantApi;