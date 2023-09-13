import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CodeExample from "../../components/CodeExample";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Text from "../../components/Text";
import { FiX } from "react-icons/fi";

function CardPage() {
  const sampleImage =
    "https://images.unsplash.com/photo-1511373800525-05da6d924ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80";
  const sampleImage2 =
    "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80";

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">Card Component</h1>

        <Text className="text-gray-700">
          The Card component allows you to create cards with various
          customization options.
        </Text>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Variations</h3>

        {/* Usage Example */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Usage Example</Heading>
          <p className="text-gray-700">
            Below are examples of how to use the Card component with different
            variations.
          </p>
          <p className="text-gray-700 bg-blue-50 p-2 rounded">
            Note: You'll need to import the necessary components and icons for
            these examples.
          </p>
        </div>

        {/* Cards with badges */}
        <div className="flex flex-col gap-4 items-start">
          <Heading level="h3">Cards with Badges</Heading>
          <Badge
            color="bg-red-500"
            position="top-right"
            badgeSX="p-2 mt-2 mr-2 text-white"
            badgeContent="New"
          >
            <Card cardWidth="md">
              <Image src={sampleImage} alt="Sample" className="object-cover" />
              <Text className="p-2">This card has a badge.</Text>
            </Card>
          </Badge>
          <CodeExample
            code={`<Badge
  color="bg-red-500"
  position="top-right"
  badgeSX="p-2 mt-2 mr-2 text-white"
  badgeContent="New"
>
  <Card cardWidth="md">
    <Image src={sampleImage} alt="Sample" className="object-cover" />
    <Text className="p-2">This card has a badge.</Text>
  </Card>
</Badge>`}
          />
        </div>

        {/* Cards with dismiss */}
        <div className="flex flex-col gap-4 items-start">
          <Heading level="h3">Cards with Dismiss</Heading>
          <Card cardWidth="sm" className="relative">
            <Button
              variant="icon"
              className="p-2 bg-gray-200 hover:bg-gray-300 absolute top-2 right-2"
            >
              <FiX className="h-6 w-6 text-gray-500" />
            </Button>
            <Image src={sampleImage2} alt="Sample 2" />
            <Text className="p-2">This card can be dismissed.</Text>
          </Card>
          <CodeExample
            code={`<Card cardWidth="sm" className="relative">
  <Button
    variant="icon"
    className="p-2 bg-gray-200 hover:bg-gray-300 absolute top-2 right-2"
  >
    <FiX className="h-6 w-6 text-gray-500" />
  </Button>
  <Image src={sampleImage2} alt="Sample 2" />
  <Text className="mt-2">This card can be dismissed.</Text>
</Card>`}
          />
        </div>

        {/* Cards with text overlay */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Cards with Text Overlay</Heading>
          <Card cardWidth="3xl" className="relative">
            <Image src={sampleImage} alt="Sample" />
            <Text className="absolute top-2 left-0 p-2 bg-black bg-opacity-50 text-white rounded-r-md">
              Text Overlay
            </Text>
          </Card>
          <CodeExample
            code={`<Card cardWidth="3xl" className="relative">
  <Image src={sampleImage} alt="Sample" />
  <Text className="absolute top-2 left-0 p-2 bg-black bg-opacity-50 text-white rounded-r-md">
    Text Overlay
  </Text>
</Card>`}
          />
        </div>

        {/* Text-only cards */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Text-only Cards</Heading>
          <Card cardWidth="sm">
            <Text className="p-2">
              This card only contains text content without an image.
            </Text>
          </Card>
          <CodeExample
            code={`<Card cardWidth="sm">
  <Text className="p-2">
    This card only contains text content without an image.
  </Text>
</Card>`}
          />
        </div>

        {/* Vertical/Horizontal cards */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Vertical/Horizontal Cards</Heading>
          <Card direction="vertical" cardWidth="lg">
            <Image src={sampleImage} alt="Sample" />
            <Text className="p-2">Vertical Card</Text>
          </Card>
          <Card direction="horizontal" cardWidth="sm">
            <Image
              src={sampleImage}
              alt="Sample"
              className="w-1/2 m-0 object-cover"
            />
            <Text className="p-2">Horizontal Card</Text>
          </Card>
          <CodeExample
            code={`<Card direction="vertical" cardWidth="lg">
  <Image src={sampleImage} alt="Sample" />
  <Text className="p-2">Vertical Card</Text>
</Card>
<Card direction="horizontal" cardWidth="sm">
  <Image src={sampleImage} alt="Sample" className="w-1/2 m-0 object-cover" />
  <Text className="p-2">Horizontal Card</Text>
</Card>`}
          />
        </div>

        {/* Cards with shadow */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Cards with Shadow</Heading>
          <Card shadow="2xl" cardWidth="md">
            <Image src={sampleImage} alt="Sample" />
            <Text className="p-2">Card with Shadow</Text>
          </Card>
          <CodeExample
            code={`<Card shadow="2xl">
  <Image src={sampleImage} alt="Sample" />
  <Text className="p-2">Card with Shadow</Text>
</Card>`}
          />
        </div>

        {/* Card Component Code */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Card Component Code</Heading>
          <p className="text-gray-700">
            Here's the code for the Card component that you can copy and use in
            your project:
          </p>
          <p className="text-gray-700 bg-blue-50 p-2 rounded">
            Note: You'll need to install Tailwind CSS & tailwind-merge to use
            this component.
          </p>
          <CodeExample
            code={`import { forwardRef, HTMLProps } from "react";
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

export default Card;`}
          />
        </div>

        {/* Card Props */}
        <div className="flex flex-col gap-4">
          <Heading level="h3">Card Props</Heading>
          <p className="text-gray-700">
            The Card component accepts the following props, in addition to any
            other props you can add to a standard HTML `div` element:
          </p>

          {/* shadow Prop */}
          <div className="flex flex-col gap-2 flex-wrap items-start">
            <h4 className="text-xl font-semibold">shadow</h4>
            <p className="text-gray-700 mb-2">
              The <code>shadow</code> prop allows you to specify the shadow
              depth for the card. It supports the following options:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-700 mb-1">
                <code>"xs"</code>: Extra Small Shadow
              </li>
              <li className="text-gray-700 mb-1">
                <code>"sm"</code>: Small Shadow
              </li>
              <li className="text-gray-700 mb-1">
                <code>"md"</code>: Medium Shadow
              </li>
              <li className="text-gray-700 mb-1">
                <code>"lg"</code>: Large Shadow
              </li>
              <li className="text-gray-700 mb-1">
                <code>"xl"</code>: Extra Large Shadow
              </li>
              <li className="text-gray-700 mb-1">
                <code>"2xl"</code>: Double Extra Large Shadow
              </li>
              <li className="text-gray-700">
                <code>"none"</code>: No Shadow
              </li>
            </ul>
          </div>

          {/* cardWidth Prop */}
          <div className="flex flex-col gap-2 flex-wrap items-start">
            <h4 className="text-xl font-semibold">cardWidth</h4>
            <p className="text-gray-700 mb-2">
              The <code>cardWidth</code> prop allows you to specify the width of
              the card. It supports a variety of options, including fixed
              widths, responsive screen sizes, and more. Here are some examples:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-700 mb-1">
                <code>0</code>: Max Width 0px
              </li>
              <li className="text-gray-700 mb-1">
                <code>none</code>: No Maximum Width (none)
              </li>
              <li className="text-gray-700 mb-1">
                <code>xs</code>: Max Width 320px
              </li>
              <li className="text-gray-700 mb-1">
                <code>sm</code>: Max Width 384px
              </li>
              <li className="text-gray-700 mb-1">
                <code>md</code>: Max Width 448px
              </li>
              <li className="text-gray-700 mb-1">
                <code>lg</code>: Max Width 512px
              </li>
              <li className="text-gray-700 mb-1">
                <code>xl</code>: Max Width 576px
              </li>
              <li className="text-gray-700 mb-1">
                <code>2xl</code>: Max Width 672px
              </li>
              <li className="text-gray-700 mb-1">
                <code>3xl</code>: Max Width 768px
              </li>
              <li className="text-gray-700 mb-1">
                <code>4xl</code>: Max Width 896px
              </li>
              <li className="text-gray-700 mb-1">
                <code>5xl</code>: Max Width 1024px
              </li>
              <li className="text-gray-700 mb-1">
                <code>6xl</code>: Max Width 1152px
              </li>
              <li className="text-gray-700 mb-1">
                <code>7xl</code>: Max Width 1280px
              </li>
              <li className="text-gray-700 mb-1">
                <code>full</code>: Full Width (100%)
              </li>
              <li className="text-gray-700 mb-1">
                <code>min</code>: Minimum Content Width (min-content)
              </li>
              <li className="text-gray-700 mb-1">
                <code>max</code>: Maximum Content Width (max-content)
              </li>
              <li className="text-gray-700 mb-1">
                <code>fit</code>: Fit Content Width (fit-content)
              </li>
              <li className="text-gray-700 mb-1">
                <code>prose</code>: Maximum Text Width (65ch)
              </li>
              <li className="text-gray-700 mb-1">
                <code>screen-sm</code>: Screen Width (640px)
              </li>
              <li className="text-gray-700 mb-1">
                <code>screen-md</code>: Screen Width (768px)
              </li>
              <li className="text-gray-700 mb-1">
                <code>screen-lg</code>: Screen Width (1024px)
              </li>
              <li className="text-gray-700">
                <code>screen-xl</code>: Screen Width (1280px)
              </li>
              <li className="text-gray-700">
                <code>screen-2xl</code>: Screen Width (1536px)
              </li>
            </ul>
          </div>

          {/* direction Prop */}
          <div className="flex flex-col gap-2 flex-wrap items-start">
            <h4 className="text-xl font-semibold">direction</h4>
            <p className="text-gray-700 mb-2">
              The <code>direction</code> prop allows you to specify the layout
              direction of the card's content. It can be set to:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">
                <code>"vertical"</code>: Vertical Layout (default)
              </li>
              <li className="text-gray-700">
                <code>"horizontal"</code>: Horizontal Layout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
