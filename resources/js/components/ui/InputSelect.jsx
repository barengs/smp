import React, { useState } from 'react';
import Icon from "@/components/ui/Icon";

const InputSelect = ({label, name, options, id}) => {
  
  return (
    <div>
      <label htmlFor="multiSelect" className="form-label">Multi Select</label>
      <select name="multiSelect" id="multiSelect" className="select2 form-control w-full mt-2 py-2" multiple="multiple">
        <option selected="selected" value="option1" className=" inline-block font-Inter font-normal text-sm text-slate-600">Option 1</option>
        <option value="option2" className=" inline-block font-Inter font-normal text-sm text-slate-600">Option 2</option>
        <option value="option3" className=" inline-block font-Inter font-normal text-sm text-slate-600">Option 3</option>
      </select>
    </div>
  );
};

export default InputSelect;