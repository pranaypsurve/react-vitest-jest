import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";

describe("snapshot", () => {
  it("app snapshot", () => {
    const conatiner = render(<App />);
    expect(conatiner).toMatchSnapshot();
  });
});

describe("#App Test Cases", () => {
  it("Check Title Text", () => {
    render(<App />);
    const titleText = screen.getByText("Vite + React");
    expect(titleText).toBeInTheDocument();
  });

  it("Check count title", () => {
    render(<App />);
    const text2 = screen.getByTitle(/count is/i);
    expect(text2).toBeInTheDocument();
  });

  it("test input field login", () => {
    render(<App />);
    const inputBox: HTMLElement[] = screen.getAllByRole("textbox");
    inputBox.forEach((item) => {
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute("type");
      expect(item).toHaveAttribute("name");
      expect(item).toHaveAttribute("placeholder");
    });
    fireEvent.change(inputBox[0], { target: { value: "surve" } });
    expect(inputBox[0].getAttribute("value")).toBe("surve");
  });
  describe("inner button text", () => {
    it("button text demo", () => {
      render(<App />);
      const btn = screen.getAllByRole("button")[1];
      fireEvent.click(btn);
      expect(screen.getByText("hello")).toBeInTheDocument();
    });
  });
});
