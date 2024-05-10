import { MediaModel } from "./MediaResponse";

export interface PageContent {
  query: string;
  setQuery: Function;
  data: MediaModel[];
  dataLength: number;
  currentPage: number;
  setCurrentPage: Function;
  handleSearch: Function;
  hasPaggination: boolean;
  deatilsPage: string;
}
