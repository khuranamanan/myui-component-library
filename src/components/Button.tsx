import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "link" | "icon" | "fab";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, className, ...rest }: ButtonProps, ref) => {
    const baseClasses = "py-2 px-4 rounded focus:outline-none";

    const variantClasses = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary:
        "text-blue-500 border border-blue-500 hover:text-blue-600 hover:border-blue-600 hover:bg-neutral-200/20",
      link: "text-blue-500 hover:underline hover:text-blue-600",
      icon: "p-2 rounded-full text-blue-500 hover:bg-blue-100",
      fab: "bg-blue-500 text-white hover:bg-blue-600 rounded-full p-4",
    };

    const buttonClasses = twMerge(
      baseClasses,
      variantClasses[variant],
      className
    );

    return (
      <button {...rest} ref={ref} className={buttonClasses}>
        {children}
      </button>
    );
  }
);

export default Button;
