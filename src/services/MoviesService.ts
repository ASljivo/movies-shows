import { MovieModel, MoviesModel } from "../models/MoviesModel";
import ApiClient, { Response } from "../utils/apiClient/ApiClient";
const baseUrl = process.env.REACT_APP_BASE_URL;

class MoviesService {
  static get(query: number, page: number): Promise<Response<MoviesModel>> {
    return ApiClient.get<MoviesModel>(
      `${baseUrl}search/movie?query=${query}&page=${page}`
    );
  }

  static getTopRated(): Promise<Response<MoviesModel>> {
    return ApiClient.get<MoviesModel>(
      `${baseUrl}movie/top_rated?language=en-US&page=1`
    );
  }

  static getById(id: string): Promise<Response<MovieModel>> {
    return ApiClient.get<MovieModel>(
      `${baseUrl}movie/${id}?append_to_response=videos`
    );
  }
}

export default MoviesService;
