'use client';

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-7xl py-6 px-8 flex items-center justify-between mx-auto">
      {/* Left: Logo and subtitle */}
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={40} />
        </div>
      </div>

      {/* Right: Navigation */}
      <nav className="flex items-center space-x-10">
        <a
          href="#home"
          className="bg-orange-500 text-white px-7 py-2 rounded transition-colors font-medium text-sm shadow hover:bg-orange-600"
          style={{ minWidth: 90, textAlign: 'center' }}
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
    </header>
  );
} 