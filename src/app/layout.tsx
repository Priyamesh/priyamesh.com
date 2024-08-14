import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Priyamesh",
    template: "%s | Priyamesh",
  },
  description: "Developer, Full-Stack Engineer",
  keywords: [
    "priyamesh",
    "Full Stack Developer",
    "Engineer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "python",
    "Django",
    "AWS",
  ],
  authors: [
    {
      name: "thirunavukkarasu",
      url: "https://priyamesh.com",
    },
  ],
  creator: "Priyamesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-orange-50">
        <main className="flex flex-col justify-center w-full max-w-2xl m-5">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
