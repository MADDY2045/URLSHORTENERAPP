import { render, screen } from "@testing-library/react";
import Spinner from "../Spinner";

describe("Test the spinner Component", () => {
  test("Test the spinner text", async () => {
    const { getAllByText } = render(<Spinner />);
    const divlist = await screen.getByRole("status");
    expect(divlist).toHaveClass("spinner-border");
    const span = getAllByText(/Loading/i);
    expect(span).toBeTruthy();
  });
});
