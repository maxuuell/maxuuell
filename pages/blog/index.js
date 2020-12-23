import React from "react";
import Link from "next/link";
import { LayoutHeader } from "../../components/Headers";
import { H3 } from "../../components/common";
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

export default Blog;
