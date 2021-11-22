import { CardUser } from "./components/CardUser";
import { CardWrapper } from "./components/CardWrapper";

function App() {
  return (
    <div className=" bg-tertiary-100 ">
      <div className=" container mx-auto grid place-content-center min-h-screen">
        <div className="grid-container">
          <CardWrapper />
          <CardUser />
          <CardUser />
          <CardUser />
        </div>
      </div>
    </div>
  );
}

export default App;
