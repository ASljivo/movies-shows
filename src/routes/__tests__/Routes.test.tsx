import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter } from "react-router-dom";
import { MovieDetails } from "components/pages/movies/MovieDetails";
import { ShowDetails } from "components/pages/shows/ShowDetails";
import { Shows } from "components/pages/shows/Shows";

describe("Routes", () => {
  test("rendering a component Movies", () => {
    const route = "/movies";

    render(
      <MemoryRouter initialEntries={[route]}>
        <MovieDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading....")).toHaveTextContent("Loading....");
  });

  test("rendering a component MovieDetails", () => {
    const route = "/movie/11";

    render(
      <MemoryRouter initialEntries={[route]}>
        <MovieDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading....")).toHaveTextContent("Loading....");
  });
  test("rendering a component Shows", () => {
    const route = "/shows";

    render(
      <MemoryRouter initialEntries={[route]}>
        <Shows />
      </MemoryRouter>
    );
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
  });
  test("rendering a component showDetails", () => {
    const route = "/show/11";

    render(
      <MemoryRouter initialEntries={[route]}>
        <ShowDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading....")).toBeInTheDocument();
  });
});
