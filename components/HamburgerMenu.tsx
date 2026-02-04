"use client";

import React, { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg
          className="w-6 h-6 text-[#1C1C1C]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path d="M4 6h16M4 12h12M4 18h8"></path>
          )}
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-30 transition-opacity duration-300
          ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-40 transform transition-transform ease-in-out duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-[#1C1C1C]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 font-oswald text-2xl pt-8">
          <Link href="/" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
            Home
          </Link>
          <Link href="/projects" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
            Projects
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
            About
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
