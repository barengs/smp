import React from 'react';
import PropTypes from 'prop-types';

const TextInputFloat = ({
  name,
  label,
  type = 'text',
  id,
  required = false,
  error = false,
  readOnly = false,
  disabled = false,
  onChange,
  onKeyDown,
  value,
}) => {
  return (
    <div className="relative z-0 w-full mb-2 group">
      <input type={type} name={name} id={id} onChange={onChange} onKeyDown={onKeyDown} value={value} readOnly={readOnly} disabled={disabled} className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${!error? 'border-gray-300' : 'border-red-400'}  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " required={required} />
      <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
  );
};
TextInputFloat.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInputFloat;
