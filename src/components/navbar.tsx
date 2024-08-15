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
    <header className="mb-16 flex items-center justify-start space-x-36 mt-10">
      <Link href="/" className="">
        <Image
          src="https://avatars.githubusercontent.com/u/47794863?v=4"
          alt="Priyamesh's avatar"
          width={100}
          height={100}
          className="rounded-full w-12 h-12"
        />
      </Link>
      <nav className="py-2" id="nav">
        <ul className="flex space-x-6 px-10">
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