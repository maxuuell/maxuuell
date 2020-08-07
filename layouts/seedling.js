import React from "react";
import { LayoutHeader } from "../components/Headers";
import HeadElement from "../components/HeadElement";
import { H1, P } from "../components/common";
import ConvertKitForm from "../components/ConvertKitForm";

export default (frontMatter) => {
  const {
    title,
    date,
    subtitle,
    imageUrl = "https://maxuuell.com/blog-header-image.jpeg",
    ck = true,
  } = frontMatter;
  return ({ children: content }) => {
    return (
      <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
        <HeadElement>
          <title>{`${title} - maxuuell`}</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@maxuuell" />
          <meta name="og:title" content={title} />
          {subtitle ? <meta name="og:description" content={subtitle} /> : null}
          <meta name="og:image" content={imageUrl} />
          <meta name="twitter:image:alt" content="A seedling from maxuuell" />
        </HeadElement>
        <LayoutHeader />
        <br />
        <H1 className="font-bold text-center mb-8 md:text-5xl">{title}</H1>
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
