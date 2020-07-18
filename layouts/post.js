import React from "react";
import { LayoutHeader } from "../components/Headers";
import { P, H1, H3 } from "../components/common";
import ConvertKitScript from "../components/ConvertKitScript";

export default (frontMatter) => {
  const { title, subtitle, date } = frontMatter;
  return ({ children: content }) => {
    return (
      <main className="w-full max-w-screen-md m-auto mb-32">
        <LayoutHeader />
        <H1 className="font-bold">{title}</H1>
        {subtitle ? <H3>{subtitle}</H3> : null}
        <P className="text-grey text-sm">{date}</P>
        {content}
        <ConvertKitScript />
      </main>
    );
  };
};
