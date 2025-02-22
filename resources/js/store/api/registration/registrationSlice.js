import { createSlice } from "@reduxjs/toolkit";

const initialRegistration = {
    data: [],
}

const registrationSlice = createSlice({
    name: "registration",
    initialState: initialRegistration,
    reducers: {
        addToStudents: (state, action) => {
            const { no_kk, nik_parent, nama_depan_ortu, nama_belakang_ortu, email, status_ortu, gender_ortu, alamat_ktp_ortu, alamat_domisili_ortu, nik_siswa, nama_depan_siswa, nama_belakang_siswa, alamat_siswa, gender_siswa, id_desa } = action.payload;
            state.data.push({ no_kk, nik_parent, nama_depan_ortu, nama_belakang_ortu, email, status_ortu, gender_ortu, alamat_ktp_ortu, alamat_domisili_ortu, nik_siswa, nama_depan_siswa, nama_belakang_siswa, alamat_siswa, gender_siswa, id_desa });
        }
    }
})

export const { addToStudents } = registrationSlice.actions;

export default registrationSlice.reducer;