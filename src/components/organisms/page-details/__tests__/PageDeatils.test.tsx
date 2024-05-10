import { render, screen } from "@testing-library/react";

import { PageDetails } from "components/organisms/page-details/PageDeatils";
import { BrowserRouter } from "react-router-dom";
import { MOCK_MOVIE } from "utils/constants";

describe("Test PageDetails component", () => {
  test("check element", () => {
    render(
      <BrowserRouter>
        <PageDetails {...MOCK_MOVIE} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("back-button")).toBeInTheDocument();
  });
});
