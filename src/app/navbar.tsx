import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="px-4">
        <a href="/">Home</a>
      </div>
      <div className="px-4">
        <a href="/blog">Blog</a>
      </div>
      <div className="px-4">
        <a href="/work">Work</a>
      </div>
    </nav>
  );
}
