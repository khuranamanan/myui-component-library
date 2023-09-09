import hljs from "highlight.js";
import "highlight.js/styles/xcode.css";
import { useEffect } from "react";

interface CodeExampleProps {
  code: string;
}

function CodeExample({ code }: CodeExampleProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="whitespace-pre-wrap text-sm border border-neutral-300 rounded overflow-hidden">
      <code className="language-javascript">{code}</code>
    </pre>
  );
}
export default CodeExample;
