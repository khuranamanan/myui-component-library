import Avatar from "../../components/Avatar";
import CodeExample from "../../components/CodeExample";

function AvatarPage() {
  const sampleImage =
    "https://images.unsplash.com/photo-1511373800525-05da6d924ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80";
  const sampleImage2 =
    "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80";

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">
          Avatar Component
        </h1>

        <p className="text-gray-700">
          The Avatar component allows you to display user avatars with various
          customization options.
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Example</h3>
        <p className="text-gray-700">
          Import the Avatar component and use it as follows:
        </p>
        <Avatar src={sampleImage} />
        <CodeExample code={`<Avatar src="avatar.jpg" />`} />
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Avatar Component Code</h3>
        <p className="text-gray-700">
          Here's the code for the Avatar component that you can copy and use in
          your project:
        </p>
        <CodeExample
          code={`import { twMerge } from "tailwind-merge";

type AvatarProps = {
  sx?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  children?: string;
  src?: string;
  alt?: string;
};

function Avatar({ sx = "", size = "md", children, src, alt }: AvatarProps) {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    "2xl": "w-20 h-20",
  };

  const defaultClasses = \`rounded-full overflow-hidden flex items-center justify-center w-full h-full text-white bg-gray-900 font-medium \${sizeClasses[size]}\`;

  const avatarClasses = twMerge(defaultClasses, sx);

  return (
    <div className={avatarClasses}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        children
      )}
    </div>
  );
}

export default Avatar;`}
        />
      </div>

      <h3 className="text-2xl font-semibold">Props</h3>
      {/* Prop: children */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-xl font-semibold">children</h4>
        <p className="text-gray-700 mb-2">
          Add text or letters to display in the center of the avatar:
        </p>
        <div className="flex items-center space-x-2">
          <Avatar>JD</Avatar>
          <Avatar>A</Avatar>
        </div>
        <CodeExample code={`<Avatar>JD</Avatar>`} />
      </div>

      {/* Prop: src */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-xl font-semibold">src (Background Image)</h4>
        <p className="text-gray-700 mb-2">
          Set a background image for the avatar. If both `src` and `children`
          are provided, `src` will take priority:
        </p>
        <div className="flex items-center space-x-2">
          <Avatar src={sampleImage} alt="User Avatar">
            JD
          </Avatar>
          <Avatar src={sampleImage2} alt="User Avatar">
            AB
          </Avatar>
        </div>
        <CodeExample
          code={`<Avatar src="avatar.jpg" alt="User Avatar">JD</Avatar>`}
        />
      </div>

      {/* Prop: alt */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-xl font-semibold">alt (Alt Text)</h4>
        <p className="text-gray-700 mb-2">
          Specify alt text for the avatar image:
        </p>
        <CodeExample code={`<Avatar src="avatar.jpg" alt="User Avatar" />`} />
      </div>

      {/* Prop: sx */}
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <h4 className="text-xl font-semibold">sx (Additional Styles)</h4>
        <p className="text-gray-700 mb-2">
          Apply additional Tailwind CSS classes:
        </p>
        <div className="flex items-center space-x-2">
          <Avatar sx="border-2 border-violet-900 bg-violet-300 text-violet-900">
            MK
          </Avatar>
          <Avatar sx="border-2 border-yellow-800" src={sampleImage} />
          <Avatar sx="bg-blue-500 text-white">AB</Avatar>
        </div>
        <CodeExample
          code={`<Avatar sx="border-2 border-violet-900 bg-violet-300 text-violet-900" >MK</Avatar>
<Avatar sx="border-2 border-yellow-800" src="avatar.jpg" />
<Avatar sx="bg-blue-500 text-white">AB</Avatar>`}
        />
      </div>

      {/* Prop: size */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h4 className="text-xl font-semibold">size</h4>
        <p className="text-gray-700 mb-2">
          Change the size of the avatar ('xs', 'sm', 'md', 'lg', 'xl', '2xl'):
        </p>
        <div className="flex items-center space-x-4 flex-wrap">
          <Avatar size="xs" src={sampleImage} />
          <Avatar size="sm" src={sampleImage} />
          <Avatar size="md" src={sampleImage} />
          <Avatar size="lg" src={sampleImage} />
          <Avatar size="xl" src={sampleImage} />
          <Avatar size="2xl" src={sampleImage} />
        </div>
        <CodeExample code={`<Avatar size="xs" src="avatar.jpg" />`} />
      </div>
    </div>
  );
}

export default AvatarPage;
