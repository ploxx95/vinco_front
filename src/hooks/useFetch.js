import { useState, useEffect } from "react";
// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://vinco-backend.herokuapp.com";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
