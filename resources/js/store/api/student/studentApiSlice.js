import { apiSlice } from "../apiSlice";

const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => 'santri'
    }),
    getStudent: builder.query({
      query: (id) => `santri/${id}`
    }),
    createStudent: builder.mutation({
      query: (data) => ({
        url: 'santri',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {useCreateStudentMutation, useGetStudentsQuery, useGetStudentQuery} = studentApi;