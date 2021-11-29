import { Formik, Form } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { CtaButton } from "./CtaButton";
import { InputForm } from "./InputForm";
import { Link, useMatch } from "react-router-dom";
import { edittUser } from "../services/ApiMethod";
import { CrudContext } from "../context/CrudContext";

const values_default = {
  name: "",
  role: "",
  score: 0,
  age: "",
  course: 0,
};
export const Formulario = () => {
  const { handleCreate, valueToPass, handleEdit } = useContext(CrudContext);

  const match = useMatch("/edit/:id");
  return (
    <Formik
      initialValues={match ? valueToPass : values_default}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(80, "Must be 80 characters or less")
          .required("Required"),
        role: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        course: Yup.number().required("Required"),
        score: Yup.number().required("Required"),
        age: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        if (!match) {
          console.log("VALUES", values);
          handleCreate(values);
          alert(JSON.stringify(values, null, 2));
        } else {
          console.log("VALUES", values);
          handleEdit(values.id, values);
          // edittUser(2, values);
          alert(JSON.stringify(values, null, 2));
        }
      }}
    >
      <Form className="space-y-4">
        <h2 className="text-center font-sans text-3xl font-semibold">
          {match ? "Editar" : "Crear"}
        </h2>
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
          <CtaButton type="submit" color="primary">
            {match ? "Editar" : "Crear"}
          </CtaButton>
          <Link to="/">
            <CtaButton type="button" color="danger">
              Cerrar
            </CtaButton>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

// const values = {
//   name: PropTypes.string,
//   role: PropTypes.string,
//   score: PropTypes.number,
//   age: PropTypes.string,
//   course: PropTypes.number,
// };

// Formulario.propTypes = {
//   values: PropTypes.shape(values),
// };
