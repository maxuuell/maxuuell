import React from "react";
import Link from "next/link";
import { LayoutHeader } from "../../components/Headers";
import HeadElement from "../../components/HeadElement";
import { H1, H3, P } from "../../components/common";
import { frontMatter } from "./*.mdx";
import formatPath from "../../utils/formatPath";

const DigitalGarden = () => {
  return (
    <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
      <HeadElement>
        <title>Digital Garden - maxuuell</title>
      </HeadElement>
      <LayoutHeader />
      <H1 className="font-bold">Digital Garden</H1>
      <Link href="../blog/what-is-a-digital-garden">
        <a className="text-sm leading-normal mb-8 inline-block">
          What is a Digital Garden?
        </a>
      </Link>
      {frontMatter
        .sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
        .map((page, key) => {
          const { title, subtitle, date, __resourcePath } = page;
          return (
            <div key={key}>
              <Link href={`${formatPath(__resourcePath)}`}>
                <a className="font-bold text-white hover:text-orange text-2xl mb-6 inline-block">
                  {title}
                </a>
              </Link>
              <p>{subtitle}</p>
            </div>
          );
        })}
    </main>
  );
};

export default DigitalGarden;
