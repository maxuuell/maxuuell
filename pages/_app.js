import "../styles/index.css";
import "../styles/ck.css";
import { MDXProvider } from "@mdx-js/react";
import { P, H1, H2, H3, UL } from "../components/common";
import CodeBlock from "../components/CodeBlock";

const components = {
  p: (props) => {
    return <P {...props} className={"text-xl"}></P>;
  },
  h1: (props) => {
    return <H1 {...props} className={"md:text-5xl"}></H1>;
  },
  h2: H2,
  h3: H3,
  ul: (props) => {
    return <UL {...props} className={"text-xl"}></UL>;
  },
  code: CodeBlock,
};

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
