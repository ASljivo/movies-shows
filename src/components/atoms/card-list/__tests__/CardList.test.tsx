import { render, screen } from "@testing-library/react";

import { CardList } from "components/atoms/card-list/CardList";
import { BrowserRouter } from "react-router-dom";
import { MOCK_MOVIE } from "utils/constants";

describe("Test Details component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  test("check value", () => {
    render(
      <BrowserRouter>
        <CardList data={[MOCK_MOVIE]} deatilsPage={"/movie"} />
      </BrowserRouter>,
      container
    );

    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
  });
});
