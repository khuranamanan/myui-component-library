import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeExampleProps {
  code: string;
}

function CodeExample({ code }: CodeExampleProps) {
  return (
    <SyntaxHighlighter language="tsx" style={coldarkCold} wrapLongLines={true}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeExample;
