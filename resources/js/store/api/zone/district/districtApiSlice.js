import { apiSlice } from "../../apiSlice";

const districtApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDistricts: builder.query({
            query: () => 'kecamatan'
        }),
        getDistrict: builder.query({
            query: (id) => `kecamatan/${id}`
        })
    })
});

export const {useGetDistrictsQuery, useGetDistrictQuery} = districtApiSlice;