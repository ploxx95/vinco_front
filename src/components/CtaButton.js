import React from "react";

export const CtaButton = ({ type, ...props }) => {
  return (
    <button
      className={`px-8 py-2 text-white  rounded-md uppercase ${props.className}`}
      type={type}
    >
      {props.children}
    </button>
  );
};
