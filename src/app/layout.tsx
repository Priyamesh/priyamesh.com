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
      name: "Priyamesh",
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
      <body className="flex flex-col min-h-screen justify-between bg-orange-50 ">
        <Navbar />
        <main className="flex flex-col flex-1 justify-center ">
          <section className="flex flex-col flex-1 p-4 w-full max-w-3xl mx-auto">
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
