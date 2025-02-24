import React from 'react';
import Icons from '../../components/ui/Icon';
import { Card } from 'flowbite-react';
import Textinput from "@/components/ui/Textinput";

const AddNewStudent = () => {
  return (
    <div>
      <h4 className="font-medium text-lg mb-3 text-slate-900">
          Pendaftaran No: 11223345566
      </h4>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 text-base text-slate-600 dark:text-slate-300">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="lg:col-span-2 col-span-1 text-slate-900 dark:text-slate-300 text-base font-medium">
              Data Orang Tua
          </div>
          <div>
            <Textinput label="No Kartu Keluarga" type="text" placeholder="Masukan Nomor Kartu Keluarga" />
            <Textinput label="No Kartu Tanda Penduduk" type="text" placeholder="Masukan Nomor Kartu Tanda Penduduk" />
          </div>
          <div>
            <Textinput label="No Kartu Keluarga" type="text" placeholder="Masukan Nomor Kartu Keluarga" />
            <Textinput label="No Kartu Tanda Penduduk" type="text" placeholder="Masukan Nomor Kartu Tanda Penduduk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewStudent;