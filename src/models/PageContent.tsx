import { MovieModel } from "./MoviesModel";

export interface PageContent {
  query: string;
  setQuery: Function;
  data: MovieModel[];
  dataLength: number;
  currentPage: number;
  setCurrentPage: Function;
  handleSearch: Function;
  hasPaggination: boolean;
}
