import React from "react";
import Link from "next/link";
import { LayoutHeader } from "../../components/Headers";
import { H2, H3 } from "../../components/common";
import HeadElement from "../../components/HeadElement";
import { frontMatter } from "./*.mdx";
import formatPath from "../../utils/formatPath";

const Blog = () => {
  return (
    <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
      <HeadElement>
        <title>Blog - maxuuell</title>
      </HeadElement>
      <LayoutHeader />
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

export default Blog;
