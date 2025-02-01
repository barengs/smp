import { apiSlice } from "../apiSlice";

const roleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => 'role'
    }),
    createRole: builder.mutation({
      query: (payload) => ({
        url: 'role',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreateRoleMutation, useGetRolesQuery} = roleApi;