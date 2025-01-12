import { createSlice } from "@reduxjs/toolkit";

const initialCityState = {
    data: [],
}

const citySlice = createSlice({
    name: "city",
    initialState: initialCityState,
    reducers: {
        addToCity: (state, action) => {
            const {code, province_code, name, meta} = action.payload;
            state.data.push({code, province_code, name, meta});
        }
    }
})

export const {addToCity} = citySlice.actions;

export default citySlice.reducer;