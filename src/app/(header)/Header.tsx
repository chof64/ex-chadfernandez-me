import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 mb-2 border-b bg-white/40 backdrop-blur-md">
      <div className="container py-3">
        <Link href="/" className="group font-bold">
          <div className="flex w-fit items-center justify-center gap-2 text-neutral-600 transition delay-75 duration-150 ease-in-out group-hover:text-neutral-800">
            <div className="aspect-square h-4 rounded-full bg-neutral-600 transition delay-75 duration-150 ease-in-out group-hover:bg-neutral-800" />
            chof64/ex
          </div>
        </Link>
      </div>
    </header>
  );
}
