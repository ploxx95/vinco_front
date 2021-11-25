import { CrudContext } from "./CrudContext";

export default function CrudProvider({ children }) {
  return <CrudContext.Provider value={{}}>{children}</CrudContext.Provider>;
}
