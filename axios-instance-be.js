import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
});

export default instance;
