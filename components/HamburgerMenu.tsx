"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Escapeキーでメニューを閉じる処理
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="focus:outline-none p-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="w-8 h-8 text-[#1C1C1C]"
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
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 backdrop-blur-sm
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Slide-in Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="サイト内ナビゲーション"
        className={`fixed top-0 right-0 h-full w-80 bg-white z-40 transform transition-all ease-in-out duration-300 border-l-4 border-black shadow-2xl
          ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}
      >
        <div className="flex justify-end p-4 border-b-4 border-black bg-gray-50">
          <button onClick={toggleMenu} aria-label="メニューを閉じる" className="focus:outline-none p-1 border-2 border-black hover:bg-[#E53935] hover:text-white transition-colors group">
            <svg
              className="w-8 h-8 text-[#1C1C1C] group-hover:text-white transition-colors"
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
        <nav className="flex flex-col items-start space-y-6 font-oswald text-3xl pt-12 px-8 uppercase tracking-wide">
          <Link href="/" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] hover:translate-x-2 transition-all duration-200">
            Home
          </Link>
          <Link href="/projects" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] hover:translate-x-2 transition-all duration-200">
            Projects
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] hover:translate-x-2 transition-all duration-200">
            About
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="text-[#1C1C1C] hover:text-[#E53935] hover:translate-x-2 transition-all duration-200">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
