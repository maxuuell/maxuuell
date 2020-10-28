import React from "react";
import Highlight from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";

const CodeBlock = ({ children }) => {
  return (
    <Highlight
      Prism={Prism}
      code={children}
      language={"rust"}
      theme={undefined}
    >
      {({ className, styles, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={`${className}`} styles={styles}>
            <code className={className}>
              {tokens.map((line, i) => {
                if (line.length === 1 && line[0].content === '' && i < tokens.length -1) {
                  line[0].content = ' ';
                }
                return ( 
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
                )
              })}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
