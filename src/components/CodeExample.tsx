import { CodeBlock } from "@atlaskit/code";

interface CodeExampleProps {
  code: string;
}

function CodeExample({ code }: CodeExampleProps) {
  return <CodeBlock text={code} language="tsx" shouldWrapLongLines />;
}
export default CodeExample;
