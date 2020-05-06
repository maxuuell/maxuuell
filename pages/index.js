import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <main>
      <div className="divide-x-2 flex w-full max-w-screen-xl m-auto">
        <section className=" w-1/3 pl-4">
          <div>
            <h1 className="text-4xl">Maxwell DeMers</h1>
            <p>Me</p>
          </div>
        </section>
        <section className="pl-4 w-2/3 h-screen">
          <div>
            <Link href="/now">
              <h1 className="text-6xl">Now</h1>
            </Link>
            <p>My now page, inspired by blah</p>
          </div>
          <div>
            <h1>Now</h1>
            <p>My now page, inspired by blah</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
