import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter tests", () => {
  const setup = () => render(<App />);

  test("Renders the react logo", () => {
    setup();
    // https://testing-library.com/docs/queries/byalttext
    const logo = screen.getByAltText("React logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.svg");
  });

  test("Renders h1 with count", () => {
    setup();
    // https://testing-library.com/docs/queries/bytext
    // const headingElement = screen.getByText("Count: 0");
    const headingElement = screen.getByText(/count: 0/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders counter buttons", () => {
    setup();
    // https://testing-library.com/docs/queries/byrole/
    expect(screen.getByRole("button", { name: "+1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-1" })).toBeInTheDocument();
  });

  test("Text changes on button pressed", () => {
    setup();
    const button = screen.getByRole("button", { name: "+1" });

    fireEvent.click(button);

    const headingElement = screen.getByText(/count: 1/i);
    expect(headingElement).toBeInTheDocument();
  });
});
