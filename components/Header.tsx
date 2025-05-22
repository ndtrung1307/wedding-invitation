"use client";

import { Menu, X } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const greatVibes = Great_Vibes({ subsets: ["vietnamese"], weight: "400" });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="shadow-sm fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#fdfcf6" }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl sm:text-2xl font-semibold text-gray-800 ${greatVibes.className}`}
        >
          <img src="/wedding-logo.png" alt="" style={{ height: "100px" }} />
        </Link>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none md:space-x-4 p-4 md:p-0`}
        >
          <li>
            <Link
              href="#story"
              className="block py-2 md:py-0 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Về Chúng Mình
            </Link>
          </li>
          <li>
            <Link
              href="#couple"
              className="block py-2 md:py-0 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Cô Dâu & Chú Rể
            </Link>
          </li>
          <li>
            <Link
              href="#photos"
              className="block py-2 md:py-0 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Ảnh Cưới
            </Link>
          </li>
          <li>
            <Link
              href="#schedule"
              className="block py-2 md:py-0 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Ngày Cưới
            </Link>
          </li>
          <li>
            <Link
              href="#timeline"
              className="block py-2 md:py-0 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Lịch Trình
            </Link>
          </li>
          <li>
            <Link
              href="#wishes"
              className="block py-2 md:py-0 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Gởi lời chúc
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
