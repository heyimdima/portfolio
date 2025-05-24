import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dima Bondar | Software Engineer",
  description:
    "Personal website of Dima Bondar, a software engineer located in Seattle, WA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="font-outfit antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
