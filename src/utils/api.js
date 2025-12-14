import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

/* 
method: GET 
desc: list of User
 */
export const getUsers = async () => {
  try {
    const { data } = await api.get("/users");
    console.log("Users:", data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
