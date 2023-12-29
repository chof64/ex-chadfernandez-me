import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 mb-2 border-b bg-white/40 backdrop-blur-md">
      <div className="container py-3">
        <Link href="/" className="font-bold">
          chof64/ex
        </Link>
      </div>
    </header>
  );
}
