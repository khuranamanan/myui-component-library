import { forwardRef, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface ImageProps extends HTMLProps<HTMLImageElement> {
  variant?: "responsive" | "responsive-round";
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ variant = "responsive", className, ...props }, ref) => {
    const baseClasses = "block mx-auto max-w-full h-auto";

    const responsiveRoundClasses =
      variant === "responsive-round"
        ? "rounded-full aspect-square object-cover"
        : "";

    const imageClasses = twMerge(
      baseClasses,
      responsiveRoundClasses,
      className
    );

    return <img ref={ref} className={imageClasses} {...props} />;
  }
);

export default Image;
