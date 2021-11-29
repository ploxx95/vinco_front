import CrudProvider from "./context/CrudProvider";
import { index as RouterComponent } from "./components/routes/index";

function App() {
  return (
    <CrudProvider>
      <RouterComponent />
    </CrudProvider>
  );
}

export default App;
