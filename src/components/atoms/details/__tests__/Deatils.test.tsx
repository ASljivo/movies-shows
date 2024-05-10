import { render, screen } from "@testing-library/react";

import { Details } from "components/atoms/details/Details";
import { BrowserRouter } from "react-router-dom";
import { MOCK_MOVIE } from "utils/constants";

describe("Test Details component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  test("check value movie", () => {
    render(
      <BrowserRouter>
        <Details {...MOCK_MOVIE} />
      </BrowserRouter>,
      container
    );

    expect(screen.getByText("145.294")).toBeInTheDocument();
  });

  test("check value shows", () => {
    render(
      <BrowserRouter>
        <Details {...{ ...MOCK_MOVIE, number_of_episodes: 100 }} />
      </BrowserRouter>,
      container
    );

    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
