import React from "react";
import Link from "next/link";
// https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app/62552263#62552263
import HeadElement from "../components/HeadElement";
import { Header } from "../components/Headers";
import { P } from "../components/common";
import ConvertKitForm from "../components/ConvertKitForm";

const Index = () => {
  return (
    <main className="w-full max-w-screen-md m-auto mb-32 pr-6 pl-6 lg:p-0">
      <HeadElement>
        <title>maxuuell</title>
      </HeadElement>
      <Header landing={true} />
      <P className={"text-xl"}>Welcome friends!</P>
      <P className={"text-xl"}>
        I am here to help you become more confident in building awesome stuff
        for the web. It's a big platform, and I want to help you make sense of
        it all so you can move faster and with greater insight into how things
        work.
      </P>
      <P className={"text-xl"}>
        I also like to share my raw thoughts and ideas in my digital garden,
        down below. You can think of this corner of the internet as my place of{" "}
        <a href="https://www.swyx.io/writing/learn-in-public/">
          Learning in public
        </a>
        .
      </P>
      <P className={"text-xl"}>
        If you like anything you read, please share it on Twitter. I am always
        happy to discuss, and very appreciative of the feedback. 🙇‍♂️ DMs are
        always open.
      </P>
      <div className="flex flex-col md:flex-row mt-4 justify-evenly">
        <div className="w-full md:w-1/2 pr-4">
          <Link href="/blog">
            <a>
              <h1 className="text-4xl text-orange cursor-pointer">Blog</h1>
            </a>
          </Link>
          <P className="text-lg">Posts that are more refined and structured.</P>
        </div>
        <div className="w-full md:w-1/2">
          <Link href="/digitalgarden">
            <a>
              <h1 className="text-4xl text-orange cursor-pointer">
                Digital Garden
              </h1>
            </a>
          </Link>
          <P className="text-lg">
            My raw ideas that I cultivate and cherish. All are welcome.
          </P>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-4 justify-evenly">
        <div className="w-full md:w-1/2 pr-4">
          <Link href="/now">
            <a>
              <h1 className="text-4xl text-orange cursor-pointer">Now</h1>
            </a>
          </Link>
          <P className="text-lg">
            My "now" page, inspired by{" "}
            <a href="https://sivers.org/now" target="__blank">
              Derek Sivers
            </a>
          </P>
        </div>
        <div className="w-full md:w-1/2">
          <Link href="/about">
            <a>
              <h1 className="text-4xl text-orange cursor-pointer">About</h1>
            </a>
          </Link>
          <P className="text-lg">Some fun stuff about me 😄</P>
        </div>
      </div>
      <br />
      <br />
      <ConvertKitForm />
    </main>
  );
};

export default Index;
