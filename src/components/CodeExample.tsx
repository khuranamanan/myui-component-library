import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeExampleProps {
  code: string;
}

function CodeExample({ code }: CodeExampleProps) {
  return (
    <SyntaxHighlighter language="tsx" style={vs} wrapLongLines showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}
export default CodeExample;
