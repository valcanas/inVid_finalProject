import axios from "axios";

const URL = "http://localhost:3000/invidapi";

export default async q => {
  const response = await axios.get(URL + q);
  return response;
};
