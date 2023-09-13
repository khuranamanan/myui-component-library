import Avatar from "../../components/Avatar";
import Badge from "../../components/Badge";
import CodeExample from "../../components/CodeExample";
import { AiFillShopping } from "react-icons/ai";

function BadgePage() {
  const sampleImage =
    "https://images.unsplash.com/photo-1511373800525-05da6d924ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80";

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">
          Badge Component
        </h1>

        <p className="text-gray-700">
          The Badge component allows you to add badges to icons, avatars, or any
          other content with various customization options.
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Example</h3>
        <p className="text-gray-700">
          Import the Badge component and use it as follows:
        </p>
        <div className="flex items-center space-x-4">
          <Badge color="bg-cyan-500" position="top-right" badgeSX="sm:p-2">
            <AiFillShopping size={40} />
          </Badge>
          <Badge color="bg-red-500" position="bottom-left" badgeSX="sm:p-2">
            <Avatar src={sampleImage} />
          </Badge>
        </div>
        <CodeExample
          code={`<Badge color="bg-cyan-500" position="top-right" badgeSX="sm:p-2">
  <AiFillShopping size={40} />
</Badge>
<Badge color="bg-red-500" position="bottom-left" badgeSX="sm:p-2">
  <Avatar src={sampleImage} />
</Badge>`}
        />
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Badge Component Code</h3>
        <p className="text-gray-700">
          Here's the code for the Badge component that you can copy and use in
          your project:
        </p>
        <p className="text-gray-700 bg-blue-50 p-2 rounded">
          Note- You'll need to install TailwindCSS, and tailwind-merge packages
          first.
        </p>
        <CodeExample
          code={`import { twMerge } from "tailwind-merge";

type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface BadgeProps {
  color?: string;
  children: React.ReactNode;
  badgeContent?: React.ReactNode;
  position?: PositionType;
  badgeSX?: string;
  badgeWrapperSX?: string;
}

const Badge: React.FC<BadgeProps> = ({
  color = "bg-red-500",
  children,
  badgeContent,
  position = "bottom-right",
  badgeSX,
  badgeWrapperSX,
}: BadgeProps) => {
  const getBadgePosition = (position: PositionType) => {
    switch (position) {
      case "top-left":
        return "top-0 left-0 transform -";
      case "top-right":
        return "top-0 right-0 transform ";
      case "bottom-left":
        return "bottom-0 left-0 transform";
      case "bottom-right":
        return "bottom-0 right-0 transform";
      default:
        return "top-0 right-0 transform ";
    }
  };

  return (
    <span className={twMerge("relative inline-block", badgeWrapperSX)}>
      {children}
      <span
        className={twMerge(
          "p-1 rounded-full aspect-square absolute text-xs flex justify-center items-center overflow-hidden",
          color,
          getBadgePosition(position),
          badgeSX
        )}
      >
        {badgeContent}
      </span>
    </span>
  );
};

export default Badge;`}
        />
      </div>

      <h3 className="text-2xl font-semibold">Props</h3>

      {/* Prop: children */}
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <h4 className="text-xl font-semibold">children</h4>
        <p className="text-gray-700 mb-2">
          The content to which you want to add the badge.
        </p>
        <Badge badgeSX="p-2">
          <Avatar size="2xl" src={sampleImage} />
        </Badge>
        <CodeExample
          code={`<Badge badgeSX="p-2">
  <Avatar size="2xl" src={sampleImage} />
</Badge>`}
        />
      </div>

      {/* Prop: color */}
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <h4 className="text-xl font-semibold">color</h4>
        <p className="text-gray-700 mb-2">
          The background color of the badge. You can use any valid Tailwind CSS
          color class.
        </p>
        <Badge color="bg-amber-500" position="top-right">
          <AiFillShopping size={30} />
        </Badge>
        <CodeExample
          code={`<<Badge color="bg-amber-500" position="top-right">
  <AiFillShopping size={30} />
</Badge>`}
        />
      </div>

      {/* Prop: badgeContent */}
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <h4 className="text-xl font-semibold">badgeContent</h4>
        <p className="text-gray-700 mb-2">
          The content of the badge. It can be any React node.
        </p>
        <Badge
          color="bg-red-500"
          position="top-right"
          badgeContent={5}
          badgeSX="text-white"
        >
          <AiFillShopping size={40} />
        </Badge>
        <CodeExample
          code={`<Badge
  color="bg-red-500"
  position="top-right"
  badgeContent={5}
  badgeSX="text-white"
>
  <AiFillShopping size={40} />
</Badge>`}
        />
      </div>

      {/* Prop: position */}
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <h4 className="text-xl font-semibold">position</h4>
        <p className="text-gray-700 mb-2">
          The position of the badge relative to the content. Possible values:
          "top-left", "top-right", "bottom-left", "bottom-right".
        </p>
        <Badge color="bg-violet-500" position="top-right">
          <Avatar src={sampleImage} />
        </Badge>
        <CodeExample
          code={`<Badge color="bg-violet-500" position="top-right">
  <Avatar src={sampleImage} />
</Badge>`}
        />
      </div>

      {/* Prop: badgeSX */}
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <h4 className="text-xl font-semibold">badgeSX</h4>
        <p className="text-gray-700 mb-2">
          Additional Tailwind CSS classes to style the badge.
        </p>
        <Badge
          color="bg-red-500"
          position="top-right"
          badgeContent={5}
          badgeSX="text-white"
        >
          <AiFillShopping size={40} />
        </Badge>
        <CodeExample
          code={`<Badge
  color="bg-red-500"
  position="top-right"
  badgeContent={5}
  badgeSX="text-white"
>
  <AiFillShopping size={40} />
</Badge>`}
        />
      </div>

      {/* Prop: badgeWrapperSX */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-xl font-semibold">badgeWrapperSX</h4>
        <p className="text-gray-700 mb-2">
          Additional Tailwind CSS classes to style the badge wrapper.
        </p>
        <CodeExample
          code={`<Badge color="bg-cyan-500" position="top-right" badgeWrapperSX="mr-4">
  <AiFillShopping size={24} />
</Badge>`}
        />
      </div>
    </div>
  );
}

export default BadgePage;
