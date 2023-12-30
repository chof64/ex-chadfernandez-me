import React from "react";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Changelog() {
  const content = fs.readFileSync(path.join(process.cwd(), "CHANGELOG.md"));

  return (
    <main>
      <section className="my-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="typo-h text-3xl font-bold lg:text-5xl">Changelog</h1>
          <p className="typo-p max-w-xl">
            This is a list of changes made to the site. It is automatically
            generated from the{" "}
            <code className="typo-inline-code">CHANGELOG.md</code> file.
          </p>
          <p className="typo-p max-w-xl">
            Made possibly by Release-it, GitHub Actions, and Conventional
            Commits.
          </p>
        </div>
      </section>
      <section>
        <div className="prose prose-neutral container mx-auto max-w-4xl">
          <MDXRemote source={content} />
        </div>
      </section>
    </main>
  );
}
