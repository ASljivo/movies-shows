import axios, { AxiosInstance } from "axios";

const baseURL = process.env.REACT_APP_BASE_URL as string;

let _token = "";
const configureAPI = (responseType: "json"): AxiosInstance => {
  const clientAPI: AxiosInstance = axios.create({
    baseURL,
    responseType: responseType,
    headers: {
      "Content-Type": "application/json",
    },
  });

  clientAPI.interceptors.request.use((config) => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGE4YWY1MWFiOTIxZDQ4NGQ0ZjE1NWIzN2ZiOGY4YyIsInN1YiI6IjY2MzY0YzA0MzU2YTcxMDEyMzE3ODNmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TDfooimU6c6iLr5-AxPRYsZrUuDSgxAcgJuJq_VusaM"; //process.env.ACCESS_TOKEN;
    _token = `Bearer ${token}`;

    config.headers["Authorization"] = _token;
    return config;
  });

  clientAPI.interceptors.response.use(
    (response) => {
      if (response.headers["authorization"])
        _token = response.headers["authorization"];
      if (response.headers["x-amzn-remapped-authorization"])
        _token = response.headers["x-amzn-remapped-authorization"];
      return response;
    },
    (error) => Promise.reject(error?.response || error)
  );

  return clientAPI;
};

export default configureAPI;
