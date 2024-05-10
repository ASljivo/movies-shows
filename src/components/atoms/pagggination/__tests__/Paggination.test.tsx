import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "components/atoms/pagggination/Paggination";

const props = {
  nPages: 10,
  currentPage: 1,
  setCurrentPage: jest.fn(),
};

describe("Test Paginationt", () => {
  test("check current page", () => {
    render(<Pagination {...props} />);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("check current page if only one page", () => {
    render(<Pagination {...{ ...props, nPages: 1 }} />);
    userEvent.click(screen.getByTestId("next"));
    userEvent.click(screen.getByTestId("prev"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("check current page if only same as end", () => {
    render(<Pagination {...{ ...props, nPages: 10 }} />);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
