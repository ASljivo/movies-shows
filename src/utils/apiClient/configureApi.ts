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
    const token = process.env.REACT_APP_ACCESS_TOKEN;
    _token = `Bearer ${token}`;

    config.headers["Authorization"] = _token;
    return config;
  });

  return clientAPI;
};

export default configureAPI;
