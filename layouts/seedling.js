import React from "react";
import { LayoutHeader } from "../components/Headers";
import HeadElement from "../components/HeadElement";
import { H1, P } from "../components/common";
import ConvertKitScript from "../components/ConvertKitScript";

export default (frontMatter) => {
  const { title, date, subtitle, imageUrl } = frontMatter;
  return ({ children: content }) => {
    return (
      <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
        <HeadElement>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@maxuuell" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:image" content={imageUrl} />
        </HeadElement>
        <LayoutHeader />
        <H1 className="font-bold">{title}</H1>
        <P className="text-grey text-sm">{`Last updated: ${date}`}</P>
        {content}
        <ConvertKitScript />
      </main>
    );
  };
};
