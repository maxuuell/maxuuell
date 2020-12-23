import React from "react";
import Link from "next/link";
import { H1 } from "./common";

export const Header = () => {
  return (
    <header className="mt-8 mb-8">
      <a className="text-white">
        <H1 className="md:text-5xl">Maxwell DeMers</H1>
      </a>
      <a href="https://twitter.com/maxuuell" target="__blank">
        @maxuuell
      </a>
    </header>
  );
};

// https://github.com/zeit/next.js/issues/7915
// Weird link behavior needs to be fixed.  Can't wrap a functional component in Link
export const LayoutHeader = () => {
  return (
    <header className="mt-8 mb-8">
      <Link href="/">
        <a className="text-white">
          <H1 className="hover:text-orange cursor-pointer md:text-5xl">
            Maxwell DeMers
          </H1>
        </a>
      </Link>
      <a href="https://twitter.com/maxuuell" target="__blank">
        @maxuuell
      </a>
    </header>
  );
};
