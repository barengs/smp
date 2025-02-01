import { createSlice } from "@reduxjs/toolkit";

const initialProvinceState = {
    data: [],
}

const provinceSlice = createSlice({
    name: "province",
    initialState: initialProvinceState,
    reducers: {
        addToProvince: (state, action) => {
            const {code, name, meta} = action.payload;
            state.data.push({code, name, meta});
        }
    }
})

export const {addToProvince} = provinceSlice.actions;

export default provinceSlice.reducer;