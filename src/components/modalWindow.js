import React, { useState } from "react";
import { postUser } from "../services/ApiMethod";
import { CtaButton } from "./CtaButton";
import { InputLabel } from "./InputLabel";

export const ModalWindow = ({ modal, dataUsers }) => {
  const [value, setValue] = useState({
    name: "",
    role: "",
    score: 0,
    age: "",
    course: 0,
  });

  function handleChange(e) {
    const input_value = e.target;
    setValue((prev) => {
      return {
        ...prev,
        [input_value.name]: input_value.value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    dataUsers((prev) => [...prev, value]);
    modal(false);
    const res = await postUser(value);
  }
  return (
    <div className="absolute top-0 bg-gray-900 h-full w-full bg-opacity-30 grid place-content-center">
      <div className="px-16 py-12 min-w-min  bg-white rounded-xl border-primary-100 border-2">
        <form onSubmit={handleSubmit}>
          <InputLabel
            value={value.name}
            handleChange={handleChange}
            type="text"
            placeholder="Cual es tu nombre?"
            name="name"
            label="Nombre"
          />

          <InputLabel
            value={value.role}
            handleChange={handleChange}
            type="text"
            placeholder="Escribe tu Rol"
            name="role"
            label="Cargo"
          />

          <InputLabel
            value={value.age}
            handleChange={handleChange}
            type="date"
            placeholder="Birthay"
            name="age"
            label="Birthay"
          />
          <div className="flex gap-4">
            <InputLabel
              value={value.score}
              handleChange={handleChange}
              type="number"
              placeholder="Your Score"
              name="score"
              label="Puntaje"
            />

            <InputLabel
              value={value.course}
              handleChange={handleChange}
              type="number"
              placeholder="Your Score"
              name="course"
              label="Cursos"
            />
          </div>
          <div className="display flex justify-center gap-4  mt-5 ">
            <CtaButton>Actualizar</CtaButton>
            <CtaButton type="button" onClick={() => modal(false)}>
              Cerrar
            </CtaButton>
          </div>
        </form>
        ;
      </div>
    </div>
  );
};
