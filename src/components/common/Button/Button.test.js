import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./index";

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  it("renders the button with children text", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    fireEvent.click(screen.getByRole("button", { name: /click me/i }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("applies the width style when passed as a prop", () => {
    const customWidth = "200px";
    render(
      <Button onClick={mockOnClick} width={customWidth}>
        Click Me
      </Button>
    );

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle(`width: ${customWidth}`);
  });
});
