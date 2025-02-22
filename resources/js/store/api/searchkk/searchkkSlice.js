import { createSlice } from "@reduxjs/toolkit";

const initialKK = {
    data: null,
}

const searchkkSlice = createSlice({
    name: "searchKK",
    initialState: initialKK,
    // reducers: {
    //     addToProvince: (state, action) => {
    //         const { code, name, meta } = action.payload;
    //         state.data.push({ code, name, meta });
    //     }
    // }
})

// export const { addToProvince } = provinceSlice.actions;

export default searchkkSlice.reducer;