import Head from "next/head";
import { render } from "react-dom";

const HeadElement = ({ children }) => {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-78687488-2"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'UA-78687488-2');`,
        }}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </Head>
  );
};

export default HeadElement;
