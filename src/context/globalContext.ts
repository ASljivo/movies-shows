import { createContext, useCallback, useState } from "react";

interface GlobalCtx {
  moviesQuery: string;
  showsQuery: string;
  setMoviesQueryValue: (value: string) => void;
  setShowsQueryValue: (value: string) => void;
}

const CONTEXT_DEFAULT: GlobalCtx = {
  moviesQuery: "",
  showsQuery: "",
  setMoviesQueryValue: () => "",
  setShowsQueryValue: () => "",
};

export const GlobalContext = createContext<GlobalCtx>(CONTEXT_DEFAULT);

export const useGlobalContext = (): GlobalCtx => {
  const [moviesQuery, setMoviesQuery] = useState<string>("");
  const [showsQuery, setShowsQuery] = useState<string>("");

  const setMoviesQueryValue = useCallback((value: string) => {
    setMoviesQuery(value);
  }, []);

  const setShowsQueryValue = useCallback((value: string) => {
    setShowsQuery(value);
  }, []);

  return {
    moviesQuery,
    showsQuery,
    setMoviesQueryValue,
    setShowsQueryValue,
  };
};
