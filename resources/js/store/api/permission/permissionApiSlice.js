import { apiSlice } from "../apiSlice";

const permissionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPermissions: builder.query({
      query: () => 'permission'
    }),
    createPermission: builder.mutation({
      query: (payload) => ({
        url: 'permission',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {useCreatePermissionMutation, useGetPermissionsQuery} = permissionApi;