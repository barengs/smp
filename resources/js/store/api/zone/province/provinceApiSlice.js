import { apiSlice } from "../../apiSlice";

const provinceApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        // query to fetch city
        getProvinces: build.query({
            query: () => "propinsi"
        }),
        getProvince: build.query({
            query: (id) => `propinsi/${id}`
        }),
        createProvince: build.mutation({
            query: (newData) => ({
                url: "propinsi",
                method: "POST",
                body: newData
            })
        }),
    }),
    // overrideExisting: false,
});

export const {useGetProvincesQuery, useGetProvinceQuery, useCreateProvinceMutation} = provinceApiSlice;