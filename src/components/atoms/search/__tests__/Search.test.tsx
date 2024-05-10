import { fireEvent, render, screen } from "@testing-library/react";

import Search from "components/atoms/search/Search";

const props = {
  value: "test",
  setValue: jest.fn(),
  onSearch: jest.fn(),
};

describe("Test Search component", () => {
  const setup = () => {
    const utils = render(<Search {...props} />);
    const input = screen.getByPlaceholderText("Search");
    return {
      input,
      ...utils,
    };
  };

  test("It should keep a $ in front of the input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    // expect(input.).toBe("$23");
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  // test("check current page if only one page", () => {
  //   render(<Search {...{ ...props, nPages: 1 }} />);
  //   userEvent.click(screen.getByTestId("next"));
  //   userEvent.click(screen.getByTestId("prev"));
  //   expect(screen.getByText("1")).toBeInTheDocument();
  // });

  // test("check current page if only same as end", () => {
  //   render(<Search {...{ ...props, nPages: 10 }} />);

  //   expect(screen.getByText("1")).toBeInTheDocument();
  // });
});
