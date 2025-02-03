import { apiSlice } from "../apiSlice";

const attendantApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAttendants: builder.query({
      query: () => 'attendant'
    }),
    createAttendant: builder.mutation({
      query: (payload) => ({
        url: 'attendant',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreateAttendantMutation, useGetAttendantsQuery} = attendantApi;