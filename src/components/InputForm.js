import { useField } from "formik";
import React from "react";

export const InputForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-1"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className=" w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <div className="error_input">{meta.error}</div>
      ) : null}
    </div>
  );
};
