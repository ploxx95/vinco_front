import { useState } from "react";
import { CardUser } from "./components/CardUser";
import { CardWrapper } from "./components/CardWrapper";
import { ModalWindow } from "./components/ModalWindow";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error, setData } = useFetch("/users");
  const [showModal, setShowModal] = useState(false);
  console.log("DATAA : ", data);
  return (
    <div className=" bg-tertiary-100 relative ">
      <div className=" container mx-auto grid place-content-center min-h-screen">
        <div className="grid-container">
          <CardWrapper modal={setShowModal} />
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
                />
              );
            })}
          </>
        </div>
      </div>
      {showModal && <ModalWindow modal={setShowModal} dataUsers={setData} />}
    </div>
  );
}

export default App;
