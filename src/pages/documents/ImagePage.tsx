import CodeExample from "../../components/CodeExample";
import Image from "../../components/Image";

function ImagePage() {
  const sampleImage =
    "https://images.unsplash.com/photo-1511373800525-05da6d924ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80";
  const sampleImage2 =
    "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80";

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-3xl font-semibold text-cyan-800">
          Image Component
        </h1>
        <p className="text-gray-700">
          The Image component allows you to display images with different
          variants and styles.
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Usage Examples</h3>
        <p className="text-gray-700 bg-blue-50 p-2 rounded">
          Note: The width of the image is responsive and depends on the width of
          its parent container.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-xl font-semibold">Responsive Image</h4>
            <p className="text-gray-700 mb-2">
              Use the <code>responsive</code> variant to display an image that
              scales with the container width.
            </p>

            <div className="w-1/2">
              <Image
                src={sampleImage}
                alt="Sample Image"
                variant="responsive"
              />
            </div>
            <CodeExample
              code={`<div className="w-1/2">
  <Image src="sampleImage.jpg" alt="Sample Image" variant="responsive" />
</div>`}
            />
          </div>

          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-xl font-semibold">Responsive Round Image</h4>
            <p className="text-gray-700 mb-2">
              Use the <code>responsive-round</code> variant to display a
              responsive round image.
            </p>
            <div className="w-1/4">
              <Image
                src={sampleImage2}
                alt="Sample Round Image"
                variant="responsive-round"
                className="w-60"
              />
            </div>
            <CodeExample
              code={`<div className="w-1/4">
  <Image
    src={sampleImage2}
    alt="Sample Round Image"
    variant="responsive-round"
    className="w-60"
  />
</div>`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Image Component Code</h3>
        <p className="text-gray-700">
          Here's the code for the Image component that you can copy and use in
          your project:
        </p>
        <p className="text-gray-700 bg-blue-50 p-2 rounded">
          Note: You'll need to install Tailwind CSS & tailwind-merge to use this
          component.
        </p>
        <CodeExample
          code={`import { forwardRef, HTMLProps } from "react";
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
`}
        />
      </div>

      {/* Image Component Props */}
      <div className="flex flex-col gap-2 flex-wrap">
        <h3 className="text-2xl font-semibold">Image Component Props</h3>
        <p className="text-gray-700">
          The Image component accepts the following props, which can be used to
          customize its appearance:
        </p>

        {/* variant Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">variant</h4>
          <p className="text-gray-700 mb-2">
            The <code>variant</code> prop specifies the image variant and
            determines its styling.
          </p>
          <p className="text-gray-700 mb-2">
            Options: <code>"responsive"</code> (default),{" "}
            <code>"responsive-round"</code>
          </p>
          <CodeExample
            code={`<Image src="sampleImage.jpg" alt="Sample Image" variant="responsive" />`}
          />
          <CodeExample
            code={`<Image src="sampleImage2.jpg" alt="Sample Round Image" variant="responsive-round" />`}
          />
        </div>

        {/* className Prop */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">className</h4>
          <p className="text-gray-700 mb-2">
            The <code>className</code> prop allows you to add additional
            Tailwind CSS classes or custom styles to the image, overriding the
            default styles.
          </p>
          <div className="w-2/6">
            <Image
              src={sampleImage}
              alt="Sample Image"
              className="border-4 border-black rounded-md"
            />
          </div>
          <CodeExample
            code={`<Image
  src={sampleImage}
  alt="Sample Image"
  className="border-4 border-black rounded-md"
/>`}
          />
        </div>

        {/* Inherited Props */}
        <div className="flex flex-col gap-2 flex-wrap items-start">
          <h4 className="text-xl font-semibold">Inherited Props</h4>
          <p className="text-gray-700 mb-2">
            The Image component inherits all the props that a normal{" "}
            <code>img</code> tag accepts. This includes <code>src</code>,{" "}
            <code>alt</code>, <code>width</code>, <code>height</code>, and
            others.
          </p>

          <CodeExample
            code={`<Image src="sampleImage.jpg" alt="Sample Image" width="300" height="200" />`}
          />
        </div>
      </div>
    </div>
  );
}

export default ImagePage;
