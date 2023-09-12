import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  fontSize?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

function Heading({
  children,
  level = "h1",
  className,
  fontSize,
  fontWeight = "bold",
}: HeadingProps) {
  const fontSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const fontSizeClassesByLevel = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    h5: "text-base",
    h6: "text-sm",
  };

  const fontWeightClasses = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const headingClasses = twMerge(
    fontSizeClassesByLevel[level],
    fontSize && fontSizeClasses[fontSize],
    fontWeightClasses[fontWeight],
    className
  );

  return React.createElement(level, { className: headingClasses }, children);
}

export default Heading;
