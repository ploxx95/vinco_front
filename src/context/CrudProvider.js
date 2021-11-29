import axios from "axios";
import { useState } from "react";
import { BASE_URL, postUser } from "../services/ApiMethod";
import { CrudContext } from "./CrudContext";

export default function CrudProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [dataUsers, setDataUsers] = useState([]);
  const [valueToPass, setValueToPass] = useState(null);

  async function getData() {
    setDataUsers(null);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}${"/users"}`);
      const data = await res.json();
      setDataUsers(data?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(data) {
    try {
      console.log(data);
      const res = await axios.post(`${BASE_URL}/user`, data);
      console.log(res);
      setDataUsers((prev) => [...prev, data]);
    } catch (error) {
      console.log("ESTO ES EL ERROR : ", error);
    }
  }
  async function handleEdit(id, data) {
    try {
      console.log(data);
      const res = await axios.put(`${BASE_URL}/user/${id}`, data);
      console.log(res);
      setDataUsers((prev) =>
        prev.map((user) => {
          if (user.id === data.id) return data;
          return user;
        })
      );
    } catch (error) {
      console.log("ESTO ES EL ERROR : ", error);
    }
  }

  function passDataToEdit(data) {
    setValueToPass(() => data);
  }
  async function handleDelete(id) {
    try {
      const res = await axios.delete(`${BASE_URL}/user/${id}`);
      console.log(res);
      setDataUsers((prev) =>
        prev.filter((user) => {
          if (user.id !== id) return user;
        })
      );
    } catch (error) {
      console.log("ESTO ES EL ERROR : ", error);
    }
  }

  return (
    <CrudContext.Provider
      value={{
        valueToPass,
        getData,
        handleEdit,
        handleCreate,
        handleDelete,
        passDataToEdit,
        dataUsers,
        loading,
        error,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
}
