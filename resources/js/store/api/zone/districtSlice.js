import { createSlice } from "@reduxjs/toolkit";

const initialDistrictState = {
    data: [],
}

const districtSlice = createSlice({
    name: "district",
    initialState: initialDistrictState,
    reducers: {
        addToDistrict: (state, action) => {
            const {code, city_code, name, meta} = action.payload;
            state.data.push({code, city_code, name, meta});
        }
    }
})

export const {addToDistrict} = districtSlice.actions;

export default districtSlice.reducer;