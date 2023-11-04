import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6060",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer secret",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});