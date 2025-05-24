"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlusIcon } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar shadow-md px-8 w-full">
        {/* Left section - Logo */}
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            docstream
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
              href="/features"
              role="tab"
              className={
                pathname === "/features"
                  ? "tab tab-active text-base"
                  : "tab text-base"
              }>
              Features
            </Link>
            <Link
              href="/pricing"
              role="tab"
              className={
                pathname === "/pricing"
                  ? "tab tab-active text-base"
                  : "tab text-base"
              }>
              Pricing
            </Link>
          </div>
        </div>
        {/* Right section - New Chat Button */}
        <div className="navbar-end">
          <Link href="/chat" className="btn btn-primary btn-soft">
            <PlusIcon size={18} />
            New Chat
          </Link>
        </div>
      </nav>
    </header>
  );
}
