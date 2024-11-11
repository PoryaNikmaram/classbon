import { render, screen } from "@testing-library/react";
import test, { describe } from "node:test";
import { Button } from "./button";

describe("Button", () => {
  it("render a default button", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("button isOutlined class applies correctly", () => {
    render(<Button isOutlined>Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outlined");
  });

  it("button variant primary is work correctly", () => {
    render(<Button variant="primary">click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
  });

  it("check if button disabled correctly", () => {
    const { getByText } = render(<Button isDisabled>disabled</Button>);
    expect(getByText("disabled")).toBeDisabled();
  });
});
