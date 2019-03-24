import axios from "axios";

const URL = "http://localhost:3000/invidapi";

export default async (q, d) => {
  const response = await axios.post(URL + q, d);
  return response;
};
