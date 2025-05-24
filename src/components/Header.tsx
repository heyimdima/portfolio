"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SendIcon } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar shadow-md px-8 w-full">
        {/* Left section - Logo */}
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            Dima Bondar
          </Link>
        </div>
        {/* Middle section - Navigation */}
        <div className="navbar-center">
          <div role="tablist" className="tabs tabs-border">
            <Link
              href="/about"
              role="tab"
              className={
                pathname === "/about"
                  ? "tab tab-active text-base"
                  : "tab text-base"
              }>
              About
            </Link>
            <Link
              href="/projects"
              role="tab"
              className={
                pathname === "/projects"
                  ? "tab tab-active text-base"
                  : "tab text-base"
              }>
              Projects
            </Link>
            <Link
              href="/resume"
              role="tab"
              className={
                pathname === "/resume"
                  ? "tab tab-active text-base"
                  : "tab text-base"
              }>
              Resume
            </Link>
          </div>
        </div>
        {/* Right section - New Chat Button */}
        <div className="navbar-end">
          <Link href="/chat" className="btn btn-primary btn-soft">
            <SendIcon size={18} />
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
