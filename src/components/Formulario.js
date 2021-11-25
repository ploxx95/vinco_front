import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { CtaButton } from "./CtaButton";
import { InputForm } from "./InputForm";
import PropTypes from "prop-types";

export const Formulario = ({ values }) => {
  const values_default = {
    name: "",
    role: "",
    score: 0,
    age: "",
    course: 0,
  };
  return (
    <Formik
      initialValues={values || values_default}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        role: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        course: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmi={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="space-y-4">
        <h2 className="text-center font-sans text-3xl font-semibold">Crear</h2>
        <InputForm
          label="Nombre  "
          type="text"
          name="name"
          placeholder="escribe tu nombre"
        />
        <InputForm
          label="Cargo  "
          type="text"
          name="role"
          placeholder="escribe tu role"
        />
        <InputForm label="Birthay Date  " type="date" name="age" />
        <div className="flex gap-x-12">
          <InputForm label="Cursos  " type="number" name="course" />
          <InputForm label="Score  " type="number" name="score" />
        </div>
        <div className="display flex gap-x-10 justify-center">
          <CtaButton type="submit" className="bg-primary-100">
            Crear
          </CtaButton>
          <CtaButton type="button" className="bg-red-500">
            Cerrar
          </CtaButton>
        </div>
      </Form>
    </Formik>
  );
};

const values = {
  name: PropTypes.string,
  role: PropTypes.string,
  score: PropTypes.number,
  age: PropTypes.string,
  course: PropTypes.number,
};

Formulario.propTypes = {
  values: PropTypes.shape(values),
};
