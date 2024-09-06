"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  // {
  //   name: "Uses",
  //   href: "/uses",
  // },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header className="flex w-full max-w-3xl mx-auto px-4 my-10">
      <Link href="/">
        <Image
          src="https://avatars.githubusercontent.com/u/47794863?v=4"
          alt="Priyamesh's avatar"
          width={100}
          height={100}
          className="rounded-full w-12 h-12"
        />
      </Link>
      <nav className="flex flex-1 justify-center items-center h-12" id="nav">
        <ul className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <li key={link.href} className="cursor-pointer text-base">
                <Link
                  href={link.href}
                  className={
                    isActive ? "text-orange-700 font-semibold" : "text-black"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}