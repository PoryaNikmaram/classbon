import { render, screen } from "@testing-library/react";
import { Price } from "./price";

describe("Price", () => {
  it("show rendered price", () => {
    render(<Price size="normal" price={150000000} />);
    screen.debug();
  });
});
