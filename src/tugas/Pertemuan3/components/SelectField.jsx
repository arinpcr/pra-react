import React from 'react';

const SelectField = ({ label, name, value, onChange, options, errorMessage }) => {
  return (
    <div className="mb-4 text-left w-full">
      <label className="block text-xs font-bold text-pink-400 mb-1.5 ml-1 uppercase tracking-widest">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 rounded-2xl bg-white border-2 border-pink-50 focus:border-pink-200 outline-none text-sm text-gray-600 appearance-none cursor-pointer shadow-sm transition-all"
        >
          <option value="">-- Select {label} --</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-pink-300 text-xs">
          ▼
        </div>
      </div>
    </div>
  );
};

export default SelectField;