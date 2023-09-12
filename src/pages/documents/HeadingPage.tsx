import CodeExample from "../../components/CodeExample";
import Heading from "../../components/Heading";

function HeadingPage() {
  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">
          Heading Component
        </h1>

        <p className="text-gray-700">
          The Heading component allows you to create headings with various
          styles and sizes.
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Examples</h3>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start">
            <Heading level="h1">Large Heading</Heading>
            <CodeExample code={`<Heading level="h1">Large Heading</Heading>`} />
          </div>

          <div className="flex flex-col gap-2 items-start">
            <Heading level="h2" fontSize="lg" fontWeight="semibold">
              Medium Heading
            </Heading>
            <CodeExample
              code={`<Heading level="h2" fontSize="lg" fontWeight="semibold">Medium Heading</Heading>`}
            />
          </div>

          <div className="flex flex-col gap-2 items-start">
            <Heading level="h3" fontSize="sm" fontWeight="light">
              Normal Heading
            </Heading>
            <CodeExample
              code={`<Heading level="h3" fontSize="sm" fontWeight="light">Normal Heading</Heading>`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Heading Component Code</h3>
        <p className="text-gray-700">
          Here's the code for the Heading component that you can copy and use in
          your project:
        </p>
        <p className="text-gray-700 bg-blue-50 p-2 rounded">
          Note: You'll need to install Tailwind CSS & tailwind-merge to use this
          component.
        </p>
        <CodeExample
          code={`import React, { ReactNode } from "react";
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
`}
        />
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Heading Props</h3>
        <p className="text-gray-700">
          The Heading component accepts the following props, which can be used
          to customize its appearance:
        </p>

        {/* level Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">level</h4>
          <p className="text-gray-700 mb-2">
            The <code>level</code> prop specifies the heading level ("h1" -
            "h6") and determines the styling and size of the heading.
          </p>
          <p className="text-gray-700 mb-2">
            Default: <code>"h1"</code>
          </p>
          <CodeExample code={`<Heading level="h2">H2 Heading</Heading>`} />
        </div>

        {/* fontSize Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">fontSize</h4>
          <p className="text-gray-700 mb-2">
            The <code>fontSize</code> prop allows you to set the font size of
            the heading.
          </p>
          <p className="text-gray-700 mb-2">
            Options: "xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl",
            "6xl"
          </p>
          <p className="text-gray-700">
            When not specified and a <code>level</code> is given, the following
            defaults apply:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>
              <code>"h1" - 3xl</code>
            </li>
            <li>
              <code>"h2" - 2xl</code>
            </li>
            <li>
              <code>"h3" - xl</code>
            </li>
            <li>
              <code>"h4" - lg</code>
            </li>
            <li>
              <code>"h5" - base</code>
            </li>
            <li>
              <code>"h6" - sm</code>
            </li>
          </ul>
          <CodeExample
            code={`<Heading fontSize="lg">Large Heading</Heading>`}
          />
        </div>

        {/* fontWeight Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">fontWeight</h4>
          <p className="text-gray-700 mb-2">
            The <code>fontWeight</code> prop allows you to set the font weight
            of the heading.
          </p>
          <p className="text-gray-700 mb-2">
            Options: "thin", "extralight", "light", "normal", "medium",
            "semibold", "bold", "extrabold", "black"
          </p>
          <p className="text-gray-700 mb-2">
            Default: <code>"bold"</code>
          </p>
          <CodeExample
            code={`<Heading fontWeight="light">Light Heading</Heading>`}
          />
        </div>

        {/* className Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">className</h4>
          <p className="text-gray-700 mb-2">
            The <code>className</code> prop allows you to add additional
            Tailwind CSS classes or custom styles to the heading, overriding the
            default styles.
          </p>
          <Heading className="text-red-500">Custom Style Heading</Heading>
          <CodeExample
            code={`<Heading className="text-red-500">Custom Style Heading</Heading>`}
          />
        </div>
      </div>
    </div>
  );
}

export default HeadingPage;
