import React, { useRef, useState } from 'react';
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import Fileinput from "@/components/ui/Fileinput";
import Icon from "@/components/ui/Icon";
import Radio from '@/components/ui/Radio';
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import {useGetRolesQuery} from "@/store/api/role/roleApiSlice";
import {useCreateAttendantMutation} from "@/store/api/attendant/attendantApiSlice";

import { useDispatch } from 'react-redux';

const FormValidation = yup.object({
  first_name: yup.string().required(' Nama depan harus di isi!'),
  username: yup.string().required(' Nama pengguna harus di isi!'),
  password: yup.string()
    .min(6, 'Minimal karakter adalah 6')
    .max(15, 'Maksimal adalah 15')
    .required(' kata kunci harus di isi!'),
  password_confirmation: yup.string('Ulangi kata sandi').oneOf([yup.ref('password')], 'kata sandi tidak sesuai'),
  email: yup.string().required(' Email harus di isi!'),
}).required();

const AddData = () => {
  const ref = useRef();
  const {data: roleData, isLoading} = useGetRolesQuery();

  const [createAttendant, {isLoading: loading, isError, error, isSuccess}] = useCreateAttendantMutation();

  const dispatch = useDispatch();

  const [modal, setModal] = useState(true);

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidation)
  });

  const [attData, setAttData] = useState({
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

  const handleGender = (e) => {
    setAttData(() => {
      return {...attData, gender: e.target.value};
    });
  };

  const handleRole = (val) => {
    setAttData(() => {
      return {
        ...attData,
        role: val.map((item) => (item.value))
      };
    });
  };
  
  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    
    setAttData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  
  const handleFileInput = (e) => {
    const files = e.target.files[0];
    const name = e.target.name;
    setAttData((prevValue) => {
      return {
        ...prevValue,
        [name]: files
      };
    });
  };
  
  // ketika button submit di klik, fungsi ini di jalankan
  const onSubmit = async () => {
    ref.current?.closeModal();
    // console.log(modal);
    // try {
    //   // fungsi ini dari redux yang di buat di folder store
    //   const response = await createAttendant(attData);
    //   console.log(response);
    //   const option = {
    //     ariaLabel: "test",
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   };
    //   if (response.error.status == 422){
    //     const errData = response.error.data;
    //     if (errData.email) {
    //       toast.error(`Terjadi kesalahan, email sudah digunakan`, option);
    //     } else if (errData.phone) {
    //       toast.error(`Terjadi kesalahan, nomor telepon sudah digunakan`, option);
    //     }
    //     setModal(!modal);
    //   }

    //   if (response.data.success == true) {
    //     toast.success('Data berhasil di tambahkan', option);
    //     setModal(!modal);
    //   }
    // } catch (error) {
    //   if (error.status !== undefined) {
    //     toast.error('Terjadi kesalahan pada :' + error.message);
    //     console.log(error);
    //   }
    // }
    // console.log(attData);
    // dispatch();
  };

  const genders = [
    {
      value: 'l',
      lable: 'Pria'
    },
    {
      value: 'p',
      lable: 'Wanita'
    }
  ];

  return (
    <Modal
      activeModal={modal}
      label="Tambah Asatidz"
      title="Asatidz Baru"
      labelClass="btn-outline-dark"
      uncontrol
      className="h-full w-full"
      icon="heroicons:document-plus"
      ref={ref}
      footerContent={
        <Button
          text="Simpan"
          className="btn-dark px-3 py-2"
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
        />
      }
    >
      <ToastContainer />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <div className="space-y-4">
          <InputGroup
            label="Nama Depan"
            id="hi_FirstName"
            name="first_name"
            type="text"
            placeholder="Tulis Nama Depan"
            horizontal
            prepend={<Icon icon="heroicons-outline:user" />}
            merged
            onChange={handleInput}
            error={errors.first_name}
            register={register}
          />
          <InputGroup
            label="Nama Belakang"
            id="hi_LastName"
            name="last_name"
            type="text"
            placeholder="Tulis nama belakang jika ada"
            prepend={<Icon icon="heroicons-outline:user" />}
            horizontal
            merged
            register={register}
            onChange={handleInput}
          />
          <InputGroup
            label="Nama Pengguna"
            id="hi_username"
            type="text"
            name="username"
            placeholder="Tulis nama sandi (username)"
            prepend={<Icon icon="heroicons-outline:key" />}
            horizontal
            merged
            register={register}
            error={errors.username}
            onChange={handleInput}
          />
          <InputGroup
            label="Kata Sandi"
            id="hi_password"
            type="password"
            name="password"
            placeholder="8+ karakter, 1 teks kapital (password) "
            prepend={<Icon icon="heroicons-outline:lock-closed" />}
            horizontal
            merged
            register={register}
            error={errors.password}
            onChange={handleInput}
          />
          <InputGroup
            label="Konfirmasi Kata Sandi"
            id="hi_password_confirm"
            type="password"
            name="password_confirmation"
            placeholder="samakan dengan kata sandi sebelumnya"
            prepend={<Icon icon="heroicons-outline:lock-closed" />}
            horizontal
            merged
            register={register}
            error={errors.password_confirmation}
            onChange={handleInput}
          />
        </div>
        <div className="space-y-4">
          <InputGroup
            label="Email"
            id="hi_email"
            type="email"
            name="email"
            placeholder="Tulis hanya berupa email"
            horizontal
            prepend={<Icon icon="heroicons-outline:mail" />}
            merged
            register={register}
            error={errors.email}
            onChange={handleInput}
          />
          <InputGroup
            label="Telepon"
            id="hi_phone"
            type="text"
            name="phone"
            placeholder="Tulis nomor telepon"
            prepend={<Icon icon="heroicons-outline:phone" />}
            horizontal
            merged
            register={register}
            onChange={handleInput}
          />
          <InputGroup
            label="Alamat"
            id="hi_address"
            type="text"
            name="address"
            placeholder="Tulis alamat"
            prepend={<Icon icon="heroicons-outline:home" />}
            horizontal
            merged
            register={register}
            onChange={handleInput}
          />
          <div className="flex flex-wrap space-xy-5">
            <label htmlFor="gender" className='inline-inputLabel flex-0 mr-2 md:w-[150px] w-[150px] break-words'>Jenis Kelamin</label>
            {genders.map((option, i) => (
              <Radio
                key={i}
                label={option.lable}
                name="gender"
                id="gender"
                value={option.value}
                checked={attData.gender === option.value}
                onChange={handleGender}
              />
            ))}
          </div>
          <div className="flex flex-wrap space-xy-5">
            <label htmlFor="role" className='inline-inputLabel flex-0 mr-2 md:w-[150px] w-[150px] break-words'>Tugas</label>
            <Select
              isMulti
              options={!isLoading ? roleData.data.map((item) => { return {label: item.name, value: item.name};}) : ''}
              name='role'
              className='react-select'
              classNamePrefix={'select'}
              id='role'
              pageSize={5}
              onChange={handleRole}
            />
          </div>
        </div>
        <div className="space-y-4">
          <Fileinput
            name="photo"
            selectedFiles={attData.photo}
            onChange={handleFileInput}
            preview
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddData;