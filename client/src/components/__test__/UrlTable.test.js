import { render, screen } from "@testing-library/react";
import UrlTable from "../UrlTable";

describe("Test the UrlTable Component", () => {
  test("Test the UrlTable", async () => {
    render(<UrlTable />);
    const TextOne = screen.getAllByText(/FULL URL/i);
    const TextTwo = screen.getAllByText(/SHORT URL/i);
    const TextThree = screen.getAllByText(/HITS/i);
    expect(TextOne).toBeTruthy();
    expect(TextTwo).toBeTruthy();
    expect(TextThree).toBeTruthy();
  });
});
