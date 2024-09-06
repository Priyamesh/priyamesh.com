import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 bg-orange-100 text-slate-700">
      © Priyamesh {new Date().getFullYear()}. Built with ❤️ and Next.js. All
      Rights Reserved.
    </footer>
  );
}
