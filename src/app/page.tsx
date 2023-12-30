import React from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="my-32">
        <div className="container">
          <Image
            className="mx-auto"
            src="/icons/ex-icon.png"
            alt="Icon"
            width={128}
            height={128}
          />
          <h1 className="typo-h mx-auto mt-12 max-w-4xl text-center text-3xl font-extrabold text-neutral-800 lg:text-5xl">
            <Balancer>
              My little learning platform tinkering with new tools and packages.
            </Balancer>
          </h1>
          <p className="typo-p mx-auto max-w-xl text-center text-lg text-neutral-600 lg:max-w-3xl lg:text-xl">
            <Balancer>
              Experiment with new tools, learning what works and what doesn't is
              the purpose.{" "}
              <span className="text-neutral-400">
                This site is frequently rebuilt and redesigned with new tech
                stacks.
              </span>
            </Balancer>
          </p>
          <div className="mx-auto mt-8 w-fit">
            <Link href="/changelog">
              <button className="rounded-md border bg-gray-800 px-3 py-2 text-sm text-white shadow transition delay-75 duration-150 ease-in-out hover:bg-gray-700 hover:shadow-md">
                View Changelog
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
