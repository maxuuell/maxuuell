import React from "react";
import Link from "next/link";

import { Header } from "../components/Headers";
import { P } from "../components/common";

const Index = () => {
  return (
    <main className="w-full max-w-screen-md m-auto">
      <Header landing={true} />
      <P>Welcome friends! 👋</P>
      <P>
        My name is Maxwell, and I am a software engineer at PayPal. I'm proud to
        be a{" "}
        <a
          href="https://medium.com/@maxuuell/auditor-to-engineer-79cccb08d614"
          target="__blank"
        >
          second career dev
        </a>
        , and actively exploring Rust. ⚙️
      </P>
      <P>
        This is my own small sliver of the internet where I share my thoughts
        and ideas. You can anticipate a lot of content on Rust,{" "}
        <a href="https://twitter.com/hashtag/gamedev" target="__blank">
          #gamedev
        </a>
        , my musings on software in general, and who knows what else.
      </P>
      <P>
        If you like anything you read, please share it on Twitter. I love
        talking about these topics, and want to hear your thoughts too!
      </P>
      <div className="flex mb-4 mt-4 justify-evenly">
        <div className="w-1/2">
          <Link href="/now">
            <h1 className="text-4xl text-orange cursor-pointer">Now</h1>
          </Link>
          <p>
            My "now" page, inspired by{" "}
            <a href="https://sivers.org/now" target="__blank">
              Derek Sivers
            </a>
          </p>
        </div>
        <div className="w-1/2">
          <Link href="/rust">
            <h1 className="text-4xl text-orange cursor-pointer">Rust</h1>
          </Link>
          <p>Rust posts on various subjects on the language, tutorials, etc.</p>
        </div>
      </div>
      <div>
        <Link href="/free">
          <h1 className="text-4xl text-orange cursor-pointer">Musings</h1>
        </Link>
        <p>Posts around broad topics and ideas.</p>
      </div>
    </main>
  );
};

export default Index;
