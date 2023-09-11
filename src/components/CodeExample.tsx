import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeExampleProps {
  code: string;
}

function CodeExample({ code }: CodeExampleProps) {
  return (
    <div className="text-sm">
      <SyntaxHighlighter
        language="tsx"
        style={coldarkCold}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeExample;
