import axios from "axios";

export const BASE_URL = "https://vinco-backend.herokuapp.com";
export const postUser = async (body) => {
  const response = await axios.post(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  // const data = await response.json();

  // if (response.status >= 400) {
  //   throw Error(data.errors);
  // }
  // sessionStorage.setItem("token", data.token);
  // return data;
  return response;
};

export const edittUser = async (id, body) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (response.status >= 400) {
      throw Error(data.errors);
    }
    sessionStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
