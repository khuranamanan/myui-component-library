import { forwardRef, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLProps<HTMLDivElement> {
  shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  cardWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "0"
    | "none"
    | "xs"
    | "full"
    | "min"
    | "max"
    | "fit"
    | "prose"
    | "screen-sm"
    | "screen-md"
    | "screen-lg"
    | "screen-xl"
    | "screen-2xl";
  direction?: "horizontal" | "vertical";
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    className,
    shadow = "none",
    cardWidth = "full",
    direction = "vertical",
    ...rest
  } = props;

  const baseClasses = "border rounded-lg overflow-hidden";

  const shadowClasses = {
    xs: "shadow-xs",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    none: "",
  };

  const cardWidthClasses =
    {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "0": "max-w-0",
      none: "max-w-none",
      xs: "max-w-xs",
      full: "max-w-full",
      min: "max-w-min",
      max: "max-w-max",
      fit: "max-w-fit",
      prose: "max-w-prose",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl",
    }[cardWidth] || "max-w-full"; // Use the cardWidth prop or fallback to full width

  const directionClasses =
    direction === "horizontal" ? "flex flex-row" : "flex flex-col";

  const cardClasses = twMerge(
    baseClasses,
    shadowClasses[shadow],
    cardWidthClasses,
    directionClasses,
    className || ""
  );

  return (
    <div ref={ref} className={cardClasses} {...rest}>
      {props.children}
    </div>
  );
});

export default Card;
