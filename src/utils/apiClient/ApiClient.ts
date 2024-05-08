import { AxiosResponse } from "axios";
import configureAPI from "./configureApi";

export interface ServerError {
  code: number;
  message: string;
}

export type Response<T> = AxiosResponse<T>;

export type ResponseError = AxiosResponse<ServerError>;

const clientAPI = configureAPI("json");

class ApiClient {
  get<U = any>(url: string, params?: any, headers?: any): Promise<Response<U>> {
    return this.invoke(clientAPI.get, url, { params, headers });
  }

  invoke<U>(action: Function, ...args: any): Promise<Response<U>> {
    return action(...args);
  }
}
const apiClient = new ApiClient();

export default apiClient;
