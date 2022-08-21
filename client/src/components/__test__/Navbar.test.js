import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import userEvent from "@testing-library/user-event";

describe("Test the Navbar Component", () => {
  test("Test the Navbar if it has a header titled URL SHORTENER APP", async () => {
    const { getAllByText, getByRole } = render(<Navbar />);
    const NavbarHeader = getAllByText("URL SHORTENER APP");
    expect(NavbarHeader).toBeTruthy();
  });
});
