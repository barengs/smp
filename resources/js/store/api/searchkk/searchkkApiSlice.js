import { apiSlice } from "../apiSlice";

const searchkkApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        searchKK: build.query({
            query: (keyword) => `student-registration/search-kk/${keyword}`
        }),

    }),
    // overrideExisting: false,
});

export const { useSearchKKQuery } = searchkkApiSlice;