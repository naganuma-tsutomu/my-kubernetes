"use client";

import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

import { links } from "../app/data/links";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f4e6] dark:bg-zinc-900 border-b-4 border-black dark:border-white font-['Oswald'] transition-colors duration-300">
      <div className="container mx-auto p-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold uppercase tracking-tighter text-[#1C1C1C] dark:text-white">
          NAGANUMA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-bold uppercase">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1C1C1C] dark:text-gray-300 hover:text-[#E53935] dark:hover:text-[#ff6b6b] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E53935] dark:focus-visible:ring-[#ff6b6b] rounded-sm px-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
