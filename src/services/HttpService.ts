import { MediaModel, MediaResponse } from "../models/MediaResponse";
import ApiClient, { Response } from "../utils/apiClient/ApiClient";

class HttpService {
  private static baseUrl = process.env.REACT_APP_BASE_URL || "";
  public static category: string;

  static get(query: string, page: number): Promise<Response<MediaResponse>> {
    return ApiClient.get<MediaResponse>(
      `${HttpService.baseUrl}search/${HttpService.category}?query=${query}&page=${page}`
    );
  }

  static getTopRated(): Promise<Response<MediaResponse>> {
    return ApiClient.get<MediaResponse>(
      `${HttpService.baseUrl}${HttpService.category}/top_rated`
    );
  }

  static getById(id: string): Promise<Response<MediaModel>> {
    return ApiClient.get<MediaModel>(
      `${HttpService.baseUrl}${HttpService.category}/${id}?append_to_response=videos`
    );
  }
}

export default HttpService;
