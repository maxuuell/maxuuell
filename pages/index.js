import React from "react";
import Link from "next/link";
// https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app/62552263#62552263
import HeadElement from "../components/HeadElement";

import { Header } from "../components/Headers";
import { P } from "../components/common";
import ConvertKitScript from "../components/ConvertKitScript";
const Index = () => {
  return (
    <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
      <HeadElement>
        <title>maxuuell</title>
      </HeadElement>
      <Header landing={true} />
      <P className={"text-xl"}>Welcome friends!</P>
      <P className={"text-xl"}>
        I am a software engineer at PayPal, and a proud{" "}
        <a
          href="https://medium.com/@maxuuell/auditor-to-engineer-79cccb08d614"
          target="__blank"
        >
          second career dev
        </a>
        .
      </P>
      <P className={"text-xl"}>
        This is my sliver of the internet where I share my thoughts and ideas. I
        make no promises about what to expect. For now, I am striving to reach
        my goals of freedom and flexibility. Be prepared for inspiration,
        software engineering musings, courses and tutorials, product ideas, and
        some spicy opinions. 🌶️
      </P>
      <P className={"text-xl"}>
        If you like anything you read, please share it on Twitter. I am always
        happy to discuss, and very appreciative of the feedback. 🙇‍♂️
      </P>
      <div className="flex flex-col md:flex-row mt-4 justify-evenly">
        <div className="w-full md:w-1/2 pr-4">
          <Link href="/now">
            <h1 className="text-4xl text-orange cursor-pointer">Now</h1>
          </Link>
          <P className="text-lg">
            My "now" page, inspired by{" "}
            <a href="https://sivers.org/now" target="__blank">
              Derek Sivers
            </a>
          </P>
        </div>
        <div className="w-full md:w-1/2">
          <Link href="/digitalgarden">
            <h1 className="text-4xl text-orange cursor-pointer">
              Digital Garden
            </h1>
          </Link>
          <P className="text-lg">
            My raw ideas that I cultivate and cherish. All are welcome.
          </P>
        </div>
      </div>
      <div>
        <Link href="/blog">
          <h1 className="text-4xl text-orange cursor-pointer">Blog</h1>
        </Link>
        <P className="text-lg">Posts that are more refined and structured.</P>
      </div>
      <ConvertKitScript />
    </main>
  );
};

export default Index;
