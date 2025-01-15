import { createSlice } from "@reduxjs/toolkit";

const initialVillageState = {
    data: [],
}

const villageSlice = createSlice({
    name: "village",
    initialState: initialVillageState,
    reducers: {
        addToVillage: (state, action) => {
            const {code, district_code, name, meta} = action.payload;
            state.data.push({code, district_code, name, meta});
        }
    }
})

export const {addToVillage} = villageSlice.actions;

export default villageSlice.reducer;