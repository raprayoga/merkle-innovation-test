import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./index";

const text = "Toast";

const variants: { theme: "white" | "danger" | "green"; style: string }[] = [
  { theme: "white", style: "bg-white border border-gray text-gray" },
  { theme: "danger", style: "bg-salmon text-primary" },
  { theme: "green", style: "bg-green text-white" },
];

const setup = (props: React.ComponentProps<typeof Toast>) => {
  const utils = render(<Toast {...props}>{text}</Toast>);

  const toastElement = screen.getByTestId("toast-element");

  return { ...utils, toastElement };
};

describe("Input test", () => {
  test.each(variants)("Should render variant correctly", ({ theme, style }) => {
    const { toastElement } = setup({
      theme,
      isShow: true,
    });

    expect(toastElement).toHaveClass(style);
  });

  test("Sould handle click", () => {
    const handleClick = jest.fn();
    const { toastElement } = setup({
      onClick: handleClick(),
      isShow: true,
    });

    fireEvent.click(toastElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
