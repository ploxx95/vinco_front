const BASE_URL = "https://vinco-backend.herokuapp.com";
const getAllUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const postUser = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/user`,);
//     console.log(response);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
