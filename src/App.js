import { CardWrapper } from "./components/CardWrapper";
import PlusIcon from "./icons/PlusIcon";

function App() {
  return (
    <div className="min-h-screen bg-tertiary-100 grid place-content-center">
      <CardWrapper className="border-4 border-primary-50 ">
        <div className="p-7 grid place-content-center border-4 rounded-full border-primary-50">
          <PlusIcon />
        </div>
      </CardWrapper>{" "}
    </div>
  );
}

export default App;
