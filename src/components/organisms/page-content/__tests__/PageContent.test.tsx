import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { PageContent } from "../PageContent";

const props = {
  query: "test",
  setQuery: jest.fn(),
  currentPage: 1,
  setCurrentPage: jest.fn(),
  data: [],
  dataLength: 100,
  handleSearch: jest.fn(),
  hasPaggination: true,
  deatilsPage: "movie",
};

describe("Test PageContent component", () => {
  test("check element", () => {
    render(
      <BrowserRouter>
        <PageContent {...props} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("prev")).toBeInTheDocument();
  });
});
