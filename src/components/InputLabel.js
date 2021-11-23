import React from "react";

export const InputLabel = ({
  value,
  handleChange,
  type,
  placeholder,
  name,
  label,
}) => {
  return (
    <>
      <div className="w-full mt-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-1"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={value}
          onChange={handleChange}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
