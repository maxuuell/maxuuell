import React from "react";
import { LayoutHeader } from "../components/Headers";
import { H1, P } from "../components/common";
import ConvertKitScript from "../components/ConvertKitScript";

export default (frontMatter) => {
  const { title, date } = frontMatter;
  return ({ children: content }) => {
    return (
      <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
        <LayoutHeader />
        <H1 className="font-bold">{title}</H1>
        <P className="text-grey text-sm">{`Last updated: ${date}`}</P>
        {content}
        <ConvertKitScript />
      </main>
    );
  };
};
