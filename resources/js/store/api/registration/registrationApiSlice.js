import { apiSlice } from "../apiSlice";

const registrationApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        // query to fetch city
        // getProvinces: build.query({
        //   query: () => "propinsi"
        // }),
        // getProvince: build.query({
        //   query: (id) => `propinsi/${id}`
        // }),
        registerWithParent: build.mutation({
            query: (newData) => ({
                url: "student-registration/register-with-parent",
                method: "POST",
                body: newData,
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }),
        registerWithoutParent: build.mutation({
            query: (newData) => ({
                url: "student-registration/register-without-parent",
                method: "POST",
                body: newData,
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }),
    }),
    // overrideExisting: false,
});

export const { useRegisterWithParentMutation, useRegisterWithoutParentMutation } = registrationApiSlice;