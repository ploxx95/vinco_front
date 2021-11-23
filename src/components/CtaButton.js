import React from "react";

export const CtaButton = (props) => {
  console.log(!!props.type);
  return (
    <button
      className={`px-8 py-2 text-white  rounded-md ${
        props?.type ? "bg-red-500" : "bg-primary-100"
      }`}
      {...props}
    >
      {props.children}
    </button>
  );
};
