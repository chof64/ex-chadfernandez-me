import React from "react";
import packageInfo from "~/../package.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container py-8">
        <div>
          <p className="text-sm text-neutral-400">
            Copyright &copy; 2023{" "}
            <Link
              href="https://chadfernandez.me"
              className="font-medium underline decoration-gray-200 decoration-2 underline-offset-4 transition delay-75 duration-150 ease-in-out hover:text-neutral-500 hover:decoration-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chad Fernandez
            </Link>
            .
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-light text-neutral-400">
            Made with ❤️, butter, and coffee.
          </p>
          <p className="text-xs font-light text-neutral-400">
            version: {packageInfo.version}
          </p>
        </div>
      </div>
    </footer>
  );
}
