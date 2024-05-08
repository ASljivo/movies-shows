import { createContext, useCallback, useState } from "react";

interface GlobalCtx {
  moviesQuery: string;
  showsQuery: string;
  moviesPage: number;
  showsPage: number;
  setMoviesQueryValue: (value: string) => void;
  setShowsQueryValue: (value: string) => void;
  setMoviesPageValue: (value: number) => void;
  setShowsPageValue: (value: number) => void;
}

const CONTEXT_DEFAULT: GlobalCtx = {
  moviesQuery: "",
  showsQuery: "",
  moviesPage: 1,
  showsPage: 1,
  setMoviesQueryValue: () => "",
  setShowsQueryValue: () => "",
  setMoviesPageValue: () => 1,
  setShowsPageValue: () => 1,
};

export const GlobalContext = createContext<GlobalCtx>(CONTEXT_DEFAULT);

export const useGlobalContext = (): GlobalCtx => {
  const [moviesQuery, setMoviesQuery] = useState<string>("");
  const [showsQuery, setShowsQuery] = useState<string>("");
  const [moviesPage, setMoviesPage] = useState<number>(1);
  const [showsPage, setShowsPage] = useState<number>(1);

  const setMoviesQueryValue = useCallback((value: string) => {
    setMoviesQuery(value);
  }, []);

  const setShowsQueryValue = useCallback((value: string) => {
    setShowsQuery(value);
  }, []);

  const setMoviesPageValue = useCallback((value: number) => {
    setMoviesPage(value);
  }, []);

  const setShowsPageValue = useCallback((value: number) => {
    setShowsPage(value);
  }, []);

  return {
    moviesQuery,
    showsQuery,
    moviesPage,
    showsPage,
    setMoviesQueryValue,
    setShowsQueryValue,
    setMoviesPageValue,
    setShowsPageValue,
  };
};
