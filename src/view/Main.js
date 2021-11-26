import { useState } from "react";
import { Outlet } from "react-router";
import { CardUser } from "../components/CardUser";
import { CardWrapper } from "../components/CardWrapper";
import { ModalWindow } from "../components/ModalWindow";
import useFetch from "../hooks/useFetch";

export const Main = () => {
  // const [showModal, setShowModal] = useState(false);
  const { data, loading, error, setData } = useFetch("/users");
  return (
    <div className=" bg-tertiary-100  ">
      <div className=" container mx-auto grid place-content-center min-h-screen">
        <div className="grid-container">
          <CardWrapper />
          <>
            {loading && "Cargando"}
            {data?.map((user) => {
              return (
                <CardUser
                  key={user.id}
                  name={user.name}
                  role={user.role}
                  score={user.score}
                  course={user.course}
                  age={user.age}
                  id={user.id}
                />
              );
            })}
          </>
        </div>
      </div>
      {/* {showModal && <ModalWindow />} */}
      <Outlet />
    </div>
  );
};
