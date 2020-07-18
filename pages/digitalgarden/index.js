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
      <HeadElement />
      <LayoutHeader />
      <H1 className="font-bold">Digital Garden</H1>
      <Link href="../blog/what-is-a-digital-garden">
        <div>
          <P className="text-sm text-orange cursor-pointer">
            What is a Digital Garden?
          </P>
        </div>
      </Link>
      {frontMatter.map((page, key) => {
        const { title, subtitle, date, __resourcePath } = page;
        return (
          <div key={key}>
            <Link href={`${formatPath(__resourcePath)}`}>
              <div>
                <H3 className="font-bold hover:text-orange cursor-pointer">
                  {title}
                </H3>
              </div>
            </Link>
            <p>{subtitle}</p>
          </div>
        );
      })}
    </main>
  );
};

export default DigitalGarden;
