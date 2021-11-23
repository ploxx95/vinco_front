import { CardUser } from "./components/CardUser";
import { CardWrapper } from "./components/CardWrapper";
import { ModalWindow } from "./components/ModalWindow";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch("/users");
  console.log("DATAA : ", data?.data[0].id);
  return (
    <div className=" bg-tertiary-100 relative ">
      <div className=" container mx-auto grid place-content-center min-h-screen">
        <div className="grid-container">
          <CardWrapper />
          <>
            {data?.data.map((user) => {
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
      <ModalWindow />
    </div>
  );
}

export default App;
