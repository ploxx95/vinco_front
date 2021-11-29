import React from "react";

export const CtaButton = ({ color = "primary", children, ...props }) => {
  const color_palette = {
    primary: {
      default: "primary-100",
      hover: "primary-500",
      text: "white",
    },
    danger: {
      default: "red-500",
      hover: "red-800",
      text: "white",
    },
  };
  return (
    <button
      className={`px-8 py-2 text-${color_palette[color].text} rounded-md uppercase bg-${color_palette[color].default} hover:bg-${color_palette[color].hover} focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
};
