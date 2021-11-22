import React from "react";

export const CtaButton = ({ children }) => {
  return (
    <button className="px-8 py-2 text-white bg-primary-100 rounded-md ">
      {children}
    </button>
  );
};
