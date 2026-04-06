import React from 'react';

const FormInput = ({ label, type, name, value, onChange, placeholder, errorMessage }) => {
  return (
    <div className="w-full mb-3">
      {/* Label kecil di atas input biar user gak bingung */}
      <label className="block text-[10px] font-extrabold text-[#ff85a1] mb-1 ml-2 uppercase tracking-tighter">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        // Background Putih, Teks Pink Tua
        className="w-full p-3 rounded-2xl bg-white text-[#ff66b2] text-xs font-bold placeholder-[#ffc1cc] outline-none border-2 border-[#ffdeeb] focus:border-[#ff85a1] transition-all text-center shadow-sm"
      />
      {errorMessage && <p className="text-[9px] text-red-400 font-bold mt-1 text-center italic">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;