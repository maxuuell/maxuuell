import "../styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import { P, H1, H2, H3 } from "../components/common";

const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
};

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
