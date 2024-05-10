import { render, screen } from "@testing-library/react";

import { VideoPlayer } from "components/atoms/video-player/VideoPlayer";

describe("Test VideoPlayer component", () => {
  test("displays greeting with name", () => {
    render(<VideoPlayer videoKey="234rk3k" />);

    expect(screen.getByTestId("iframe")).toBeInTheDocument();
  });
});
