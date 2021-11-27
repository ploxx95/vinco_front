import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CrudContext } from "../context/CrudContext";
import { CtaButton } from "./CtaButton";
import { MoreButton } from "./MoreButton";

export const CardUser = (props) => {
  const { name, role, score, course, age, id } = props;
  const { passDataToEdit } = useContext(CrudContext);
  return (
    <div className="relative w-76 h-95 rounded-xl p-8 shadow-md bg-white ">
      <img
        className="rounded-full m-auto border-8 border-tertiary-100 mb-3"
        width="102"
        src="/img/author.png"
        alt="perfil-user"
      />
      <h2 className="text-base text-center    leading-6 font-semibold capitalize text-secondary-500">
        {name}
      </h2>
      <h4 className=" font-sans text-center text-xs leading-none font-normal capitalize text-secondary-100">
        {role}
      </h4>
      <div className="flex justify-around my-10">
        <div className="flex flex-col items-center">
          <p className="text-xl leading-7 font-semibold text-secondary-30000">
            {course}
          </p>
          <p className="text-xs leading-none font-normal text-gray-neutral">
            Cursos
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-xl leading-7 font-semibold text-secondary-30000">
            {score}
          </p>
          <p className="text-xs leading-none font-normal text-gray-neutral">
            Puntaje
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl leading-7 font-semibold text-secondary-30000">
            {age}
          </p>
          <p className="text-xs leading-none font-normal text-gray-neutral">
            Edad
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <Link to={`/edit/${id}`}>
          <CtaButton
            color="primary"
            type="button"
            onClick={() => passDataToEdit(props)}
          >
            Actualizar
          </CtaButton>
        </Link>
      </div>
      <div className="absolute top-6 right-4">
        <MoreButton />
      </div>
    </div>
  );
};
