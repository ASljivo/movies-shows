import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tab } from "components/atoms/tab/Tab";
import { BrowserRouter } from "react-router-dom";

describe("Test Tab component", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  test("check value", () => {
    render(
      <BrowserRouter>
        <Tab name="Test" path="test" />
      </BrowserRouter>,
      container
    );
    userEvent.click(screen.getByTestId("tab"));
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
