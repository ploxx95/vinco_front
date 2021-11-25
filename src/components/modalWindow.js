import { useFormik } from "formik";
import React, { useState } from "react";
import { postUser } from "../services/ApiMethod";
import { CtaButton } from "./CtaButton";
import { InputForm } from "./InputForm";
import * as Yup from "yup";
import { Formulario } from "./Formulario";

export const ModalWindow = ({ modal, dataUsers }) => {
  // function handleChange(e) {
  //   const input_value = e.target;
  //   setValue((prev) => {
  //     return {
  //       ...prev,
  //       [input_value.name]: input_value.value,
  //     };
  //   });
  // }
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(value);
  //   dataUsers((prev) => [...prev, value]);
  //   modal(false);
  //   const res = await postUser(value);
  // }
  // <InputLabel
  //           value={formik.values.role}
  //           handleChange={formik.handleChange}
  //           type="text"
  //           placeholder="Escribe tu Rol"
  //           name="role"
  //           label="Cargo"
  //         />

  return (
    <div className="absolute top-0 bg-gray-900 h-full w-full bg-opa city-30 grid place-content-center">
      <div className="px-16 py-12 min-w-min  bg-white rounded-xl border-primary-100 border-2">
        <Formulario />
      </div>
    </div>
  );
};
