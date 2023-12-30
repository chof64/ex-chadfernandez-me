import React from "react";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main>
      <section className="my-32">
        <div className="container">
          <h1 className="typo-h mx-auto max-w-4xl text-center text-3xl font-extrabold text-neutral-800 lg:text-5xl">
            <Balancer>
              My little learning platform tinkering with new tools and packages.
            </Balancer>
          </h1>
          <p className="typo-p mx-auto max-w-xl text-center text-lg text-neutral-600 lg:max-w-3xl lg:text-xl">
            <Balancer>
              Experiment with new tools, learning what works and what doesn't is
              the purpose.
            </Balancer>
          </p>
        </div>
      </section>
    </main>
  );
}
