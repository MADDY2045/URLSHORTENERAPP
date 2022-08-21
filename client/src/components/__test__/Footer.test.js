import { render } from "@testing-library/react";
import FooterComponent from "../FooterComponent";

describe("Test the Footer Component", () => {
  test("Test the Footer text", async () => {
    const { getAllByText } = render(<FooterComponent />);
    const span = getAllByText(/Madhavan/i);
    expect(span).toBeTruthy();
  });
});
