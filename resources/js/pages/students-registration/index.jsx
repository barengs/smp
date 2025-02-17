import React, { useReducer, useState } from 'react';

import Card from "@/components/ui/Card";
import { Button, Label, Radio, Select, TextInput, } from 'flowbite-react';

const dummyData = [
    "Keluarga A - Jakarta",
    "Keluarga B - Bandung",
    "Keluarga C - Surabaya",
    "Keluarga D - Yogyakarta",
    "Keluarga E - Bali",
];

const radioReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RADIO':
            return { ...state, selectedRadio: action.payload };
        default:
            return state;
    }
};



const StudentRegistration = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [state, dispatch] = useReducer(radioReducer, { selectedRadio: 'ortu-baru' });

    // Handle Radio Change
    const handleRadioChange = (event) => {
        dispatch({ type: 'SET_RADIO', payload: event.target.value });
    };


    // Fungsi untuk menangani perubahan input
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Filter data berdasarkan input
        if (value) {
            const filtered = dummyData.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    };

    return (
        <div className='space-y-5'>
            <Card noborder>
                <div className="flex max-w-md flex-col gap-4">
                    <fieldset>
                        <legend className="mb-4">Apakah Sudah Memiliki Akun Orang Tua?</legend>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="ortu-baru"
                                name="countries"
                                value="ortu-baru"
                                defaultChecked
                                onChange={handleRadioChange}

                            />
                            <Label htmlFor="ortu-baru">Tidak, Buat Baru</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="ortu-ada"
                                name="countries"
                                value="ortu-ada"
                                onChange={handleRadioChange}

                            />
                            <Label htmlFor="ortu-ada">Sudah</Label>
                        </div>
                    </fieldset>
                    <div>
                        {state.selectedRadio === 'ortu-ada' && (
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="base" value="Nomer KK" />
                                </div>
                                <TextInput
                                    id="base"
                                    type="text"
                                    sizing="md"
                                    className="mb-5"
                                    placeholder="Cari Orang tua berdasarkan KK"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    autocomplete="off"
                                />
                                {filteredData.length > 0 && (
                                    <ul className="mt-2 border rounded-md border-gray-300 bg-white shadow-lg">
                                        {filteredData.map((item, index) => (
                                            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="mb-2 block">
                                    <Label htmlFor="base" value="Nomer Registrasi" />
                                </div>
                                <TextInput
                                    id="reg_no"
                                    type="number"
                                    value="20241201201"
                                    sizing="md"
                                    placeholder="Nomer Registrasi "
                                    className="mb-5"
                                    readOnly
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="nik_student" value="Nomer Induk Kependudukan(NIK)" />
                                </div>
                                <TextInput
                                    id="nik_student"
                                    type="number"
                                    sizing="md"
                                    placeholder="Masukkan NIK "
                                    className="mb-5"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="nik" value="Nama Lengkap" />
                                </div>
                                <div className="flex space-x-4">
                                    <div className="flex-1">
                                        <TextInput
                                            id="nama_depan"
                                            type="text"
                                            sizing="md"
                                            className="mb-5"
                                            placeholder="Nama Depan"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <TextInput
                                            id="nama_belakang"
                                            type="text"
                                            sizing="md"
                                            className="mb-5"
                                            placeholder="Nama Belakang"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Pilih Gender" />
                                </div>
                                <Select className="mb-5" id="gender" required>
                                    <option value="L">Laki-Laki</option>
                                    <option value="P">Perempuan</option>
                                </Select>
                                <div className="mb-2 block">
                                    <Label htmlFor="address" value="Alamat" />
                                </div>
                                <TextInput
                                    id="address"
                                    type="number"
                                    sizing="md"
                                    placeholder="Masukkan Alamat "
                                    className="mb-5"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Pendidikan Terakhir" />
                                </div>
                                <Select className="mb-5" id="gender" required>
                                    <option>Pilih Pendidikan Terakhir</option>
                                </Select>
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Village" />
                                </div>
                                <Select className="mb-5" id="gender" required>
                                    <option>Select Village</option>
                                </Select>
                                <Button type="submit">Submit</Button>
                            </div>
                        )}
                        {state.selectedRadio === 'ortu-baru' && (
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="kk" value="No Kartu Keluarga" />
                                </div>
                                <TextInput
                                    id="kk"
                                    type="number"
                                    sizing="md"
                                    placeholder="Masukkan No KK"
                                    className="mb-5"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="nik" value="No Induk Kependudukan(NIK)" />
                                </div>
                                <TextInput
                                    id="nik"
                                    type="number"
                                    sizing="md"
                                    className="mb-5"
                                    placeholder="Masukkan No NIK"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="nik" value="Nama Lengkap" />
                                </div>
                                <div className="flex space-x-4">
                                    <div className="flex-1">
                                        <TextInput
                                            id="nama_depan"
                                            type="text"
                                            sizing="md"
                                            className="mb-5"
                                            placeholder="Nama Depan"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <TextInput
                                            id="nama_belakang"
                                            type="text"
                                            sizing="md"
                                            className="mb-5"
                                            placeholder="Nama Belakang"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email" />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    sizing="md"
                                    className="mb-5"
                                    placeholder="Masukkan Email"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Pilih Gender" />
                                </div>
                                <Select className="mb-5" id="gender" required>
                                    <option value="L">Laki-Laki</option>
                                    <option value="P">Perempuan</option>
                                </Select>
                                <div className="mb-2 block">
                                    <Label htmlFor="card_address" value="Alamat KTP" />
                                </div>
                                <TextInput
                                    id="card_address"
                                    type="text"
                                    sizing="md"
                                    className="mb-5"
                                    placeholder="Masukkan Alamat KTP"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="domicile_address" value="Alamat Domisili" />
                                </div>
                                <TextInput
                                    id="domicile_address"
                                    type="text"
                                    sizing="md"
                                    className="mb-5"
                                    placeholder="Masukkan Alamat Domisili"
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Village" />
                                </div>
                                <Select className="mb-5" id="gender" required>
                                    <option>Select Village</option>
                                </Select>
                                <Button type="submit">Submit</Button>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default StudentRegistration;