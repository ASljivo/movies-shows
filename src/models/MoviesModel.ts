interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Genres {
  id: number;
  name: string;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
interface Videos {
  results: Video[];
}

export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection?: string;
  budget?: number;
  genres?: Genres[];
  homepage?: string;
  imdb_id?: string;
  origin_country?: string[];
  production_companies?: ProductionCompanies[];
  production_countries?: ProductionCountries[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguages[];
  status?: string;
  tagline?: string;
  videos?: Videos;
}

export interface MoviesModel {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}
