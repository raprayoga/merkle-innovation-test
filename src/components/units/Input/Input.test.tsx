import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./index";

const placeholder = "input name";
const inputText = "inputed text";

const variants: { theme: "default" | "danger"; style: string }[] = [
  { theme: "default", style: "border-gray focus:shadow-primary" },
  { theme: "danger", style: "border-red focus:shadow-red" },
];

const setup = (props: React.ComponentProps<typeof Input>) => {
  const utils = render(<Input placeholder={placeholder} {...props} />);

  const inputElement = screen.getByTestId("input-element");

  return { ...utils, inputElement };
};

describe("Input test", () => {
  test.each(variants)("Should render variant correctly", ({ theme, style }) => {
    const { inputElement } = setup({ placeholder, theme });

    expect(inputElement).toHaveClass(style);
  });

  test("sould handle input user", () => {
    const { inputElement } = setup({});

    fireEvent.change(inputElement, {
      target: {
        value: inputText,
      },
    });
    expect(inputElement).toHaveValue(inputText);
  });
});
