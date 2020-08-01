import React from "react";
import { LayoutHeader } from "../components/Headers";
import { P, H1, H3 } from "../components/common";
import HeadElement from "../components/HeadElement";
import ConvertKitForm from "../components/ConvertKitForm";
// import Share from "../components/Share";

export default (frontMatter) => {
  const { title, subtitle = "", date, imageUrl, ck = true } = frontMatter;
  return ({ children: content }) => {
    return (
      <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
        <HeadElement>
          <title>{`${title} - maxuuell`}</title>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@maxuuell" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:image" content={imageUrl} />
        </HeadElement>
        <LayoutHeader />
        <H1 className="font-bold">{title}</H1>
        {subtitle ? <H3>{subtitle}</H3> : null}
        {date ? <P className="text-grey text-sm">{date}</P> : <br />}
        {content}
        <br />
        <br />
        {ck ? <ConvertKitForm /> : null}
      </main>
    );
  };
};
