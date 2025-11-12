"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black border-b-2 border-gray-300 h-20 z-20">
      <div className="flex justify-between items-center h-full px-6 md:mr-30 md:ml-30">
        {/* Company logo */}
        <nav>
          <Link href="/">
            <Image
              src="/logo-jne.png"
              alt="Company logo"
              width={80}
              height={80}
              className="flex items-center"
            />
          </Link>
        </nav>

        {/* Hamburger button */}
        <button
          className="text-2xl text-[#203475] focus:outline-none cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="hover:scale-90 transition" />
          ) : (
            <FaBars className="hover:scale-90 transition" />
          )}
        </button>

        {/* Navigasi mobile */}
        {isOpen && (
          <nav className="absolute top-20 left-0 w-full bg-white flex flex-col items-start px-6 text-xl text-black space-y-4 py-4 shadow-md md:hidden z-50">
            <div className="w-full">
              <button
                className="flex justify-between items-center w-full hover:text-gray-400 cursor-pointer"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <span>About</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isAboutOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link
                    href="/history"
                    className="hover:text-gray-500"
                    onClick={() => {
                      setIsOpen(false);
                      setIsAboutOpen(false);
                    }}
                  >
                    History
                  </Link>
                  <Link
                    href="/teams"
                    className="hover:text-gray-500"
                    onClick={() => {
                      setIsOpen(false);
                      setIsAboutOpen(false);
                    }}
                  >
                    Teams
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/articles"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/register"
              className="text-[#E11C22] hover:text-red-200 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}

        {/* Navigasi desktop */}
        <nav className="hidden md:flex space-x-10 text-lg relative">
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="hover:text-gray-300 flex items-center gap-1 cursor-pointer"
            >
              About
              <svg
                className={`w-4 h-4 mt-1 transition-transform duration-200 ${
                  openDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openDropdown && (
              <div className="absolute left-0 bg-white text-black rounded-lg shadow-xl mt-2 w-40 z-50">
                <Link
                  href="/history"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                  onClick={() => setOpenDropdown(false)}
                >
                  History
                </Link>
                <Link
                  href="/teams"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                  onClick={() => setOpenDropdown(false)}
                >
                  Teams
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/articles" className="hover:text-gray-300">
            Articles
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Navigasi login */}
        <Link
          href="/register"
          className="hidden md:flex bg-[#E11C22] text-white py-2 px-4 rounded-full "
        >
          Login
        </Link>
      </div>
    </header>
  );
}
