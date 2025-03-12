import React, {useEffect, useState} from 'react';
import ModalForm from '@/components/partials/modal/modal-form';
import TextInputFloat from '@/components/partials/form/TextInputFloat';
import SelectInputFloat from '@/components/partials/form/SelectInputFloat';
import FileInputFloat from '@/components/partials/form/FileInputFloat';
import Icon from "@/components/ui/Icon";

import { ToastContainer, toast } from "react-toastify";

import {useGetRolesQuery} from "@/store/api/role/roleApiSlice";
import {useCreateAttendantMutation} from "@/store/api/attendant/attendantApiSlice";
import { vi } from '@faker-js/faker';

const Create = () => {
  // ambil data role dari redux
  const {data: roleData, isLoading} = useGetRolesQuery();
  //  kirim data attendant baru ke server via redux  
  const [createAttendant, {isLoading: loading, isError, error, isSuccess}] = useCreateAttendantMutation();
  //  define variable data attendant
  const [fieldData, setFieldData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    gender: '',
    role: '',
    photo: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    
    setFieldData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleFileInput = (e) => {
    const files = e.target.files[0];
    const name = e.target.name;
    setFieldData((prevValue) => {
      return {
        ...prevValue,
        [name]: files
      };
    });
  };
  //   pada saat form di submit, kirim data attendant baru ke server via redux
  const handleSubmit = async () => {
    try {
      const response = await createAttendant(fieldData); // kirim data attendant baru ke server
      // cek jika ada error
      if (response.error.status === 422) {
        const err = response.error.data;
        if (err.email) {
          toast.error('email sudah terdaftar');
        }
        if (err.phone) {
          toast.error(response.error);
        }
      }
      // cek jika data berhasil di tambahkan
      if (response.data.success === true) {
        setOpenModal(false);
        toast.success('Data berhasil di tambahkan');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpenModal(true)} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 ml-2">
        <Icon icon="heroicons:plus" width="20" className="mr-2" /> Tambah Data
      </button>
      <ModalForm
        modalTitle="Tambah Data"
        onOpen={openModal}
        onClose={() => setOpenModal(false)}
        btnLabelSubmit="Simpan"
        btnLabelCancel="Batal"
        onSubmit={handleSubmit}
      >
        {/* <ToastContainer /> */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextInputFloat
            name={'first_name'}
            label={'Nama Depan'}
            id={'first_name'}
            type={'text'}
            onChange={handleInput}
          />
          <TextInputFloat
            name={'last_name'}
            label={'Nama Belakang'}
            id={'last_name'}
            type={'text'}
            onChange={handleInput}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextInputFloat
            name={'username'}
            label={'Nama Pengguna'}
            id={'username'}
            type={'text'}
            onChange={handleInput}
          />
          <TextInputFloat
            name={'email'}
            label={'Email'}
            id={'email'}
            type={'email'}
            onChange={handleInput}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextInputFloat
            name={'password'}
            label={'Kata Sandi'}
            id={'password'}
            type={'password'}
            onChange={handleInput}
          />
          <TextInputFloat
            name={'password_confirmation'}
            label={'Konfirmasi Kata Sandi'}
            id={'password_confirmation'}
            type={'password'}
            onChange={handleInput}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextInputFloat
            name={'address'}
            label={'Alamat'}
            id={'address'}
            type={'text'}
            onChange={handleInput}
          />
          <SelectInputFloat
            name={'gender'}
            label={'Jenis Kelamin'}
            id={'gender'}
            option={[
              {value: 'L', label: 'Laki-laki'},
              {value: 'P', label: 'Perempuan'},
            ]}
            onChange={handleInput}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextInputFloat
            name={'address'}
            label={'Alamat'}
            id={'address'}
            type={'text'}
            onChange={handleInput}
          />
          <SelectInputFloat
            name={'role'}
            label={'Tugas / Jabatan'}
            id={'role'}
            option={!isLoading ? roleData.data.map((item) => { return {label: item.name, value: item.name};}) : ''}
            onChange={handleInput}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FileInputFloat
            name={'photo'}
            label={'Foto'}
            id={'photo'}
            onChange={handleFileInput}
          />
        </div>
      </ModalForm>
    </>
  );
};

export default Create;