import CodeExample from "../../components/CodeExample";
import Text from "../../components/Text";

function TextPage() {
  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">Text Component</h1>
        <p className="text-gray-700">
          The Text component allows you to create text elements with various
          font sizes and weights.
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Examples</h3>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start">
            <Text>Normal Text</Text>
            <CodeExample code={`<Text>Normal Text</Text>`} />
          </div>

          <div className="flex flex-col gap-2 items-start">
            <Text fontSize="lg" fontWeight="semibold">
              Large and Semibold Text
            </Text>
            <CodeExample
              code={`<Text fontSize="lg" fontWeight="semibold">Large and Semibold Text</Text>`}
            />
          </div>

          <div className="flex flex-col gap-2 items-start">
            <Text fontSize="2xl" fontWeight="light">
              Large and Light Text
            </Text>
            <CodeExample
              code={`<Text fontSize="2xl" fontWeight="light">Large and Light Text</Text>`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Text Component Code</h3>
        <p className="text-gray-700">
          Here's the code for the Text component that you can copy and use in
          your project:
        </p>
        <p className="text-gray-700 bg-blue-50 p-2 rounded">
          Note: You'll need to install Tailwind CSS & tailwind-merge to use this
          component.
        </p>
        <CodeExample
          code={`import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  children: ReactNode;
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

function Text({
  children,
  className,
  fontSize,
  fontWeight = "normal",
}: TextProps) {
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

  const textClasses = twMerge(
    fontSize && fontSizeClasses[fontSize],
    fontWeightClasses[fontWeight],
    className
  );

  return <p className={textClasses}>{children}</p>;
}

export default Text;
`}
        />
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Text Props</h3>
        <p className="text-gray-700">
          The Text component accepts the following props, which can be used to
          customize its appearance:
        </p>

        {/* fontSize Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">fontSize</h4>
          <p className="text-gray-700 mb-2">
            The <code>fontSize</code> prop allows you to set the font size of
            the text.
          </p>
          <p className="text-gray-700 mb-2">
            Options: "xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl",
            "6xl"
          </p>
          <CodeExample code={`<Text fontSize="lg">Large Text</Text>`} />
        </div>

        {/* fontWeight Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">fontWeight</h4>
          <p className="text-gray-700 mb-2">
            The <code>fontWeight</code> prop allows you to set the font weight
            of the text.
          </p>
          <p className="text-gray-700 mb-2">
            Options: "thin", "extralight", "light", "normal", "medium",
            "semibold", "bold", "extrabold", "black"
          </p>
          <CodeExample code={`<Text fontWeight="bold">Bold Text</Text>`} />
        </div>

        {/* className Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">className</h4>
          <p className="text-gray-700 mb-2">
            The <code>className</code> prop allows you to add additional
            Tailwind CSS classes or custom styles to the text, overriding the
            default styles.
          </p>
          <Text className="text-red-500">Custom Style Text</Text>
          <CodeExample
            code={`<Text className="text-red-500">Custom Style Text</Text>`}
          />
        </div>
      </div>
    </div>
  );
}

export default TextPage;
