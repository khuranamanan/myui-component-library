import Button from "../../components/Button";
import CodeExample from "../../components/CodeExample";

function ButtonPage() {
  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">
          Button Component
        </h1>

        <p className="text-gray-700">
          The Button component allows you to create buttons with various
          variants.
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Examples</h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              onClick={() => alert("Primary Button Clicked")}
            >
              Primary Button
            </Button>

            <Button
              variant="secondary"
              onClick={() => alert("Secondary Button Clicked")}
            >
              Secondary Button
            </Button>

            <Button variant="link" onClick={() => alert("Link Button Clicked")}>
              Link Button
            </Button>

            <Button variant="icon" onClick={() => alert("Icon Button Clicked")}>
              <span role="img" aria-label="Rocket">
                🚀
              </span>
            </Button>

            <Button variant="fab" onClick={() => alert("FAB Clicked")}>
              <span>+</span>
            </Button>
          </div>

          <CodeExample
            code={`<Button
  variant="primary"
  onClick={() => alert("Primary Button Clicked")}
>
  Primary Button
</Button>

<Button
  variant="secondary"
  onClick={() => alert("Secondary Button Clicked")}
>
  Secondary Button
</Button>

<Button variant="link" onClick={() => alert("Link Button Clicked")}>Link Button</Button>

<Button variant="icon" onClick={() => alert("Icon Button Clicked")}>
  <span role="img" aria-label="Rocket">
    🚀
  </span>
</Button>

<Button variant="fab" onClick={() => alert("FAB Clicked")}>
  <span>+</span>
</Button>`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Button Component Code</h3>
        <p className="text-gray-700">
          Here's the code for the Button component that you can copy and use in
          your project:
        </p>
        <p className="text-gray-700 bg-blue-50 p-2 rounded">
          Note: You'll need to install Tailwind CSS & tailwind-merge to use this
          component.
        </p>
        <CodeExample
          code={`import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
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

export default Button;`}
        />
      </div>

      {/* Button Props */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Button Props</h3>
        <p className="text-gray-700">
          The Button component accepts all the standard button props, which can
          be used to customize its appearance and behavior.
        </p>

        {/* className Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">className</h4>
          <p className="text-gray-700 mb-2">
            Use the <code>className</code> prop to add additional Tailwind CSS
            classes or custom styles to the button:
          </p>

          <Button
            variant="primary"
            className="bg-black rounded-full hover:bg-neutral-700"
          >
            Custom Style Button
          </Button>

          <CodeExample
            code={`<Button
  variant="primary"
  className="bg-black rounded-full hover:bg-neutral-700"
>
  Custom Style Button
</Button>
`}
          />
        </div>

        {/* disabled Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">disabled</h4>
          <p className="text-gray-700 mb-2">
            Use the <code>disabled</code> prop to make the button appear
            disabled and prevent user interaction:
          </p>

          <Button
            variant="link"
            disabled
            className="bg-black disabled:opacity-75 text-gray-300 hover:text-gray-100 cursor-not-allowed"
          >
            Disabled Button
          </Button>

          <CodeExample
            code={`<Button
  variant="link"
  disabled
  className="bg-black disabled:opacity-75 text-gray-300 hover:text-gray-100 cursor-not-allowed"
>
  Disabled Button
</Button>
`}
          />
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
