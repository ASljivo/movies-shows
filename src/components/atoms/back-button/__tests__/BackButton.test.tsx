import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BackButton } from "components/atoms/back-button/BackButton";
import { BrowserRouter } from "react-router-dom";

describe("Test BackButton component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  test("check value", () => {
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>,
      container
    );

    expect(screen.getByTestId("back-button")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("back-button"));
  });
});
