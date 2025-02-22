import React, { useEffect, useState } from 'react';
import Card from "@/components/ui/Card";
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useSearchKKQuery } from '../../store/api/searchkk/searchkkApiSlice';
import { useRegisterWithoutParentMutation, useRegisterWithParentMutation } from '../../store/api/registration/registrationApiSlice';

const StudentRegistration = () => {
    const initialFormData = {
        no_kk: "",
        nik_parent: "",
        nama_depan_ortu: "",
        nama_belakang_ortu: "",
        email: "",
        status_ortu: "",
        gender_ortu: "",
        alamat_ktp_ortu: "",
        alamat_domisili_ortu: "",
        nik_siswa: "",
        nama_depan_siswa: "",
        nama_belakang_siswa: "",
        alamat_siswa: "",
        gender_siswa: "",
        id_desa: 1,
        parent_id: 0,
    };

    const [searchValue, setSearchValue] = useState("");
    const [kk, setKK] = useState(null);
    const [searchedKK, setSearchedKK] = useState(true);
    const [regWithParent, setRegWithParent] = useState(true);

    const { data, error, isLoading } = useSearchKKQuery(kk, { skip: !kk });

    const [formDataWithParent, setFormDataWithParent] = useState({
        no_kk: "",
        nik_parent: "",
        nama_depan_ortu: "",
        nama_belakang_ortu: "",
        email: "",
        status_ortu: "",
        gender_ortu: "",
        alamat_ktp_ortu: "",
        alamat_domisili_ortu: "",
        nik_siswa: "",
        nama_depan_siswa: "",
        nama_belakang_siswa: "",
        alamat_siswa: "",
        gender_siswa: "",
        id_desa: 1,
        parent_id: 0,
    });
    const [registerWithParent, { isLoadingPost, isErrorPost, errorPost }] = useRegisterWithParentMutation();
    const [registerWithoutParent, { isLoadPost, isErrPost, errPost }] = useRegisterWithoutParentMutation();



    const [errors, setErrors] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormDataWithParent((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    // const validateForm = () => {
    //     let newErrors = {};
    //     if (!formData.no_kk) newErrors.no_kk = "No KK diisi!";
    //     if (!formData.nik_parent) newErrors.nik_parent = "NIK Orang Tua wajib diisi!";
    //     if (!formData.nama_depan_ortu) newErrors.nama_depan_ortu = "Nama Depan Orang Tua wajib diisi!";
    //     if (!formData.email) newErrors.email = "Email wajib diisi!";
    //     if (!formData.status_ortu) newErrors.status_ortu = "Status Orang Tua wajib dipilih!";
    //     if (!formData.gender_ortu) newErrors.gender_ortu = "Gender Orang Tua wajib dipilih!";
    //     if (!formData.nik_siswa) newErrors.nik_siswa = "NIK Siswa wajib diisi!";
    //     if (!formData.nama_depan_siswa) newErrors.nama_depan_siswa = "Nama Depan Siswa wajib diisi!";
    //     if (!formData.gender_siswa) newErrors.gender_siswa = "Jenis Kelamin Siswa wajib dipilih!";
    //     if (!formData.id_desa) newErrors.id_desa = "Nama Desa wajib dipilih!";

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    const handleSearch = () => {
        if (!searchValue) {
            alert("Masukkan nomor KK terlebih dahulu!");
        }
        setKK(searchValue);
        setSearchedKK(false);
        console.log(data.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!validateForm()) return;
        if (regWithParent == true) {
            console.log("register with parent")
            try {
                const response = await registerWithParent(formDataWithParent).unwrap();
                console.log("Registration Success:", response);
            } catch (err) {
                console.error("Registration Failed:", err.error);
            }
        } else {
            console.log("register only students")
            try {
                const response = await registerWithoutParent(formDataWithParent).unwrap();
                console.log("Registration Success:", response);
            } catch (err) {
                console.error("Registration Failed:", err.error);
            }
        }


    };

    useEffect(() => {
        if (data && data.data) {
            setFormDataWithParent((prev) => ({
                ...prev,
                no_kk: data.data.kk || "",
                nik_parent: data.data.nik || "",
                nama_depan_ortu: data.data.first_name || "",
                nama_belakang_ortu: data.data.last_name || "",
                status_ortu: data.data.parent_as || "",
                gender_ortu: data.data.gender || "",
                alamat_ktp_ortu: data.data.card_address || "",
                alamat_domisili_ortu: data.data.domicile_address || "",
                parent_id: data.data.id || 0,
            }));
            setRegWithParent(false);
        } else if (!isLoading) {
            // Jika data null dan tidak sedang loading, reset form
            setFormDataWithParent(initialFormData);
            setRegWithParent(true);

        }

    }, [data, isLoading]);

    return (
        <div className='space-y-5'>
            <Card className="w-full" noborder>
                <div className="w-fit mb-5">
                    <div className="mb-2 block">
                        <Label htmlFor="base" value="Cari Nomer KK" />
                    </div>
                    <div className="flex space-x-2">
                        <TextInput
                            id="base"
                            type="number"
                            className="w-full"
                            placeholder="Cari Orang tua berdasarkan KK"
                            autoComplete="off"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button color="blue" onClick={handleSearch}>
                            Cari
                        </Button>
                    </div>
                    {data ? (
                        data.success && data.data ? (
                            <div></div>
                        ) : (
                            <span className="text-xs">*KK tidak ditemukan, Silakan isi formulir di bawah</span>
                        )
                    ) : null}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Form Orang Tua */}
                        <div>

                            {isLoading && <p>Loading...</p>}
                            {error && <p>Error fetching data</p>}
                            {data ? (
                                data.success && data.data ? (
                                    <div>
                                        <h2 className="text-lg font-bold mb-4">Orang Tua</h2>
                                        <div className="mt-4 mb-2 block">
                                            <Label htmlFor="base" value="No Kartu Keluarga*" />
                                        </div>
                                        <TextInput name="no_kk" className=" mb-2" type="number" placeholder="No KK" required value={formDataWithParent.no_kk} onChange={handleFormChange} readOnly />
                                        {errors.no_kk && <p className="text-red-500 text-xs">{errors.no_kk}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="NIK Orang Tua*" />
                                        </div>
                                        <TextInput id="nik_parent" name="nik_parent" className=" mb-2" type="number" placeholder="NIK Orang Tua" required value={formDataWithParent.nik_parent} onChange={handleFormChange} readOnly />
                                        {errors.nik_parent && <p className="text-red-500 text-xs">{errors.nik_parent}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Nama Lengkap Orang Tua*" />
                                        </div>
                                        <div className="flex w-full space-x-4 mb-2">
                                            <TextInput className="flex-1" name="nama_depan_ortu" id="nama_depan" type="text" placeholder="Nama Depan" required value={formDataWithParent.nama_depan_ortu} onChange={handleFormChange} readOnly />
                                            {errors.nama_depan_ortu && <p className="text-red-500 text-xs">{errors.nama_depan_ortu}</p>}
                                            <TextInput className="flex-1" id="nama_belakang" type="text" placeholder="Nama Belakang" value={formDataWithParent.nama_belakang_ortu} onChange={handleFormChange} readOnly />
                                        </div>

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Email*" />
                                        </div>
                                        <TextInput id="email" name="email" type="email" placeholder="Email" className="mb-4" required value={formDataWithParent.email} onChange={handleFormChange} readOnly />
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Status Orang tua*" />
                                        </div>
                                        <Select className="mb-2" name="status_ortu" value={formDataWithParent.status_ortu} onChange={handleFormChange} required readOnly>
                                            <option value="ayah">Ayah</option>
                                            <option value="ibu">Ibu</option>
                                        </Select>
                                        {errors.status_ortu && <p className="text-red-500 text-xs">{errors.status_ortu}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Gender Orang Tua*" />
                                        </div>
                                        <Select className="mb-2" name="gender_ortu" value={formDataWithParent.gender_ortu} onChange={handleFormChange} required readOnly>
                                            <option value="L">Laki-Laki</option>
                                            <option value="P">Perempuan</option>
                                        </Select>
                                        {errors.gender_ortu && <p className="text-red-500 text-xs">{errors.gender_ortu}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Alamat KTP" />
                                        </div>
                                        <TextInput id="card_address" type="text" value={formDataWithParent.alamat_ktp_ortu} onChange={handleFormChange} placeholder="Alamat KTP" className="mb-4" readOnly />

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Alamat Domisili" />
                                        </div>
                                        <TextInput id="domicile_address" type="text" value={formDataWithParent.alamat_domisili_ortu} onChange={handleFormChange} placeholder="Alamat Domisili" className="mb-4" readOnly />
                                    </div>
                                ) : (
                                    <div className="w-full  ">
                                        <h2 className="text-lg font-bold mb-4">Orang Tua</h2>
                                        <div className="mt-4 mb-2 block">
                                            <Label htmlFor="base" value="No Kartu Keluarga*" />
                                        </div>
                                        <TextInput name="no_kk" className=" mb-2" type="number" placeholder="No KK" required value={formDataWithParent.no_kk} onChange={handleFormChange} />
                                        {errors.no_kk && <p className="text-red-500 text-xs">{errors.no_kk}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="NIK Orang Tua*" />
                                        </div>
                                        <TextInput id="nik_parent" name="nik_parent" className=" mb-2" type="number" placeholder="NIK Orang Tua" required value={formDataWithParent.nik_parent} onChange={handleFormChange} />
                                        {errors.nik_parent && <p className="text-red-500 text-xs">{errors.nik_parent}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Nama Lengkap Orang Tua*" />
                                        </div>
                                        <div className="flex w-full space-x-4 mb-2">
                                            <TextInput className="flex-1" name="nama_depan_ortu" id="nama_depan" type="text" placeholder="Nama Depan" required value={formDataWithParent.nama_depan_ortu} onChange={handleFormChange} />
                                            {errors.nama_depan_ortu && <p className="text-red-500 text-xs">{errors.nama_depan_ortu}</p>}
                                            <TextInput className="flex-1" id="nama_belakang" type="text" placeholder="Nama Belakang" value={formDataWithParent.nama_belakang_ortu} onChange={handleFormChange} />
                                        </div>

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Email*" />
                                        </div>
                                        <TextInput id="email" name="email" type="email" placeholder="Email" className="mb-4" required value={formDataWithParent.email} onChange={handleFormChange} />
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Status Orang tua*" />
                                        </div>
                                        <Select className="mb-2" name="status_ortu" value={formDataWithParent.status_ortu} onChange={handleFormChange} required>
                                            <option value="ayah">Ayah</option>
                                            <option value="ibu">Ibu</option>
                                        </Select>
                                        {errors.status_ortu && <p className="text-red-500 text-xs">{errors.status_ortu}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Gender Orang Tua*" />
                                        </div>
                                        <Select className="mb-2" name="gender_ortu" value={formDataWithParent.gender_ortu} onChange={handleFormChange} required>
                                            <option value="L">Laki-Laki</option>
                                            <option value="P">Perempuan</option>
                                        </Select>
                                        {errors.gender_ortu && <p className="text-red-500 text-xs">{errors.gender_ortu}</p>}

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Alamat KTP" />
                                        </div>
                                        <TextInput id="card_address" type="text" value={formDataWithParent.alamat_ktp_ortu} onChange={handleFormChange} placeholder="Alamat KTP" className="mb-4" />

                                        <div className="mb-2 block">
                                            <Label htmlFor="base" value="Alamat Domisili" />
                                        </div>
                                        <TextInput id="domicile_address" type="text" value={formDataWithParent.alamat_domisili_ortu} onChange={handleFormChange} placeholder="Alamat Domisili" className="mb-4" />
                                    </div>
                                )
                            ) : null}
                        </div>

                        {/* Form Siswa */}
                        <div>
                            <h2 className="text-lg font-bold mb-4">Siswa</h2>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="No Registrasi" />
                            </div>
                            <TextInput id="no_registrasi" name="nik_siswa" type="number" placeholder="No Registrasi" className="mb-2" />

                            <div className="mb-2 block">
                                <Label htmlFor="base" value="NIK Siswa*" />
                            </div>
                            <TextInput id="nik_student" name="nik_siswa" type="number" placeholder="NIK Siswa" className="mb-2" required value={formDataWithParent.nik_siswa} onChange={handleFormChange} />
                            {errors.nik_siswa && <p className="text-red-500 text-xs">{errors.nik_siswa}</p>}

                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Nama Lengkap Siswa*" />
                            </div>
                            <div className="flex w-full space-x-4 mb-2">
                                <TextInput className="flex-1" id="nama_depan" name="nama_depan_siswa" type="text" placeholder="Nama Depan" required value={formDataWithParent.nama_depan_siswa} onChange={handleFormChange} />
                                {errors.nama_depan_siswa && <p className="text-red-500 text-xs">{errors.nama_depan_siswa}</p>}
                                <TextInput className="flex-1" id="nama_belakang" name="nama_belakang_siswa" type="text" placeholder="Nama Belakang" value={formDataWithParent.nama_belakang_siswa} onChange={handleFormChange} />
                            </div>

                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Jenis Kelamin*" />
                            </div>
                            <Select className="mb-2" name="gender_siswa" value={formDataWithParent.gender_siswa} onChange={handleFormChange} required>
                                <option value="L">Laki-Laki</option>
                                <option value="P">Perempuan</option>
                            </Select>
                            {errors.gender_siswa && <p className="text-red-500 text-xs">{errors.gender_siswa}</p>}

                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Alamat" />
                            </div>
                            <TextInput id="address" type="text" name="alamat_siswa" placeholder="Alamat" value={formDataWithParent.alamat_siswa} onChange={handleFormChange} className="mb-4" defaultValue="Jln Raya indah" />

                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Nama Desa*" />
                            </div>
                            <Select className="mb-2" defaultValue="1" name="id_desa">
                                <option>Pilih Desa</option>
                                <option value="1">Pilih Desa 1</option>

                            </Select>
                            {errors.id_desa && <p className="text-red-500 text-xs">{errors.id_desa}</p>}

                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <Button type="submit" disabled={searchedKK}>Submit</Button>
                    </div>
                </form>

            </Card>
        </div>
    );
};

export default StudentRegistration;
