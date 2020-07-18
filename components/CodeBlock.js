import React from "react";
import Prism from "prism-react-renderer/prism";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children }) => {
  return (
    <Highlight
      Prism={Prism}
      {...defaultProps}
      code={children}
      language={"react"}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={className}>
            <code className={className}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
