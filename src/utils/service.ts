import axios from "axios";

const service = axios.create({
  timeout: 10000,
});

export default service;
