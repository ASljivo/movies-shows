import { MovieModel, MoviesModel } from "../models/MoviesModel";
import ApiClient, { Response } from "../utils/apiClient/ApiClient";

class MoviesService {
  static get(query: number, page: number): Promise<Response<MoviesModel>> {
    return ApiClient.get<MoviesModel>(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`
    );
  }

  static getTopRated(): Promise<Response<MoviesModel>> {
    return ApiClient.get<MoviesModel>(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
    );
  }

  static getById(id: string): Promise<Response<MovieModel>> {
    return ApiClient.get<MovieModel>(
      `https://api.themoviedb.org/3/movie/${id}`
    );
  }
}

export default MoviesService;
