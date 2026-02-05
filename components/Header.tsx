"use client";

import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

import { links } from "../app/data/links";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f4e6] border-b-4 border-black font-['Oswald']">
      <div className="container mx-auto p-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold uppercase tracking-tighter text-[#1C1C1C]">
          NAGANUMA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-bold uppercase">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">{link.name}</Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
