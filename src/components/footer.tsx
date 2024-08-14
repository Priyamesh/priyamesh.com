import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center py-4 bg-orange-100">
      © Priyamesh {new Date().getFullYear()}. Built with ❤️ and dedication. All
      Rights Reserved.
    </footer>
  );
}
