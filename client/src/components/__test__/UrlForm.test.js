import { fireEvent, render, screen } from "@testing-library/react";
import UrlForm from "../UrlForm";
import userEvent from "@testing-library/user-event";

describe("Test the UrlForm Component", () => {
  test("Test the UrlForm if it has a button enabled and a defined classname", async () => {
    render(<UrlForm />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
    const primaryButton = screen.getByRole("button", { name: /COMPRESS URL/i });
    expect(primaryButton).toHaveClass("btn btn-outline-primary");
    expect(primaryButton).not.toBeDisabled();
  });
});

describe("Test the UrlForm Component", () => {
  test("Test the UrlForm if it has an Input Element", async () => {
    render(<UrlForm />);
    const inputRole = screen.findAllByRole("input");
    expect(inputRole).toBeTruthy();
  });
});

it("Search input has a place holder", () => {
  const component = <UrlForm />;
  const { getAllByPlaceholderText } = render(component);

  expect(getAllByPlaceholderText("Please enter your URL")).toBeTruthy();
});
