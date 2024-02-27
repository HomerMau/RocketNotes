import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-cbyi.onrender.com",
})

api.get("/users/:id")