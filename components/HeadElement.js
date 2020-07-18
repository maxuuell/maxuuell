import Head from "next/head";
import { render } from "react-dom";

const HeadElement = () => {
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
    </Head>
  );
};

export default HeadElement;
