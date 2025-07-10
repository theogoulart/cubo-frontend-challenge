'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClick(e: MouseEvent) {
      // Check if the click target is the menu button
      const target = e.target as HTMLElement;
      if (target.closest('button[aria-controls="mobile-menu"]')) {
        return; // Don't close if clicking the menu button
      }
      
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full max-w-7xl py-4 px-4 md:py-6 md:px-8 flex items-center justify-between mx-auto relative">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={80} height={32} className="md:w-[100px] md:h-[40px]" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
        <a
          href="#home"
          className="bg-orange-500 text-white px-6 py-2 rounded transition-colors font-medium text-sm shadow hover:bg-orange-600"
        >
          HOME
        </a>
        <a
          href="#menu1"
          className="text-gray-400 px-2 py-2 rounded font-medium text-sm hover:text-gray-600 transition-colors"
        >
          MENU 1
        </a>
        <a
          href="#menu2"
          className="text-gray-400 px-2 py-2 rounded font-medium text-sm hover:text-gray-600 transition-colors"
        >
          MENU 2
        </a>
        <a
          href="#menu3"
          className="text-gray-400 px-2 py-2 rounded font-medium text-sm hover:text-gray-600 transition-colors"
        >
          MENU 3
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors z-[70] fixed top-4 right-4"
        style={{ pointerEvents: "auto" }}
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden transition-opacity duration-200 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute top-0 left-0 right-0 bg-white shadow-lg border-t transition-transform duration-200 ${isMenuOpen ? "translate-y-0" : "-translate-y-8"} rounded-b-lg`}
          style={{ minHeight: isMenuOpen ? "auto" : 0 }}
        >
          <nav className="flex flex-col py-4 mt-16">
            <a
              href="#home"
              className="bg-orange-500 text-white px-6 py-3 mx-4 mb-2 rounded transition-colors font-medium text-sm shadow hover:bg-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#menu1"
              className="text-gray-600 px-6 py-3 mx-4 hover:bg-gray-100 transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU 1
            </a>
            <a
              href="#menu2"
              className="text-gray-600 px-6 py-3 mx-4 hover:bg-gray-100 transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU 2
            </a>
            <a
              href="#menu3"
              className="text-gray-600 px-6 py-3 mx-4 hover:bg-gray-100 transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU 3
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 