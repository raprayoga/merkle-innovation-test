import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./index";

const variants: { variant: "primary" | "white" | "green"; style: string }[] = [
  { variant: "primary", style: "bg-primary" },
  { variant: "primary", style: "bg-white border border-gray" },
  { variant: "green", style: "border border-green shadow shadow-green" },
];

describe("Card correctly", () => {
  test.each(variants)("sould render card correctly ", ({ variant, style }) => {
    render(
      <Card className={style} theme={variant}>
        Card
      </Card>
    );

    const cardElement = screen.getByTestId("card-element");
    expect(cardElement).toHaveClass(style);
  });
});
