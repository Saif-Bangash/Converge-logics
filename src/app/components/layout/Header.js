/* eslint-disable @next/next/no-img-element */
// components/Header.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // ✅ Ye line add zaroori hai


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f9e7] ">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://www.convergelogics.com/assets/convergelogo.svg"
            alt="Logo"
            className="h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              Services <span className="text-lg">▾</span>
            </button>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-md  rounded-md min-w-[160px]">
              <Link
                href="/tech"
                className="px-4 py-2 hover:bg-gray-100 border-b border-gray-100"
              >
                Tech
              </Link>
              <Link
                href="/tech"
                className="px-4 py-2 hover:bg-gray-100 border-b border-gray-100"
              >
                Marketing
              </Link>
              <Link href="/tech" className="px-4 py-2 hover:bg-gray-100">
                Finance
              </Link>
            </div>
          </div>

          <Link href="/projects">Projects</Link>
        </nav>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact" className="text-gray-700 font-medium">
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full border border-lime-400 text-black font-semibold bg-lime-200 hover:bg-lime-300 transition"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-lime-200 hover:bg-lime-300"
          onClick={() => setIsOpen(true)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Offcanvas Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex">
          {/* Slide-in Menu */}
          <div className="bg-white w-64 h-full shadow-lg p-6 animate-slideIn">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {/* X Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            {/* Mobile Menu Container */}
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto max-h-screen">
              <div className="flex items-center justify-end px-6 py-4 border-b">
                {/* <h2 className="text-lg font-semibold">Menu</h2> */}
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-gray-800 hover:text-lime-600 transition" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4 mt-10 text-gray-800 font-medium px-6 pb-10">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>

                <details className="group">
                  <summary className="cursor-pointer flex items-center justify-between py-2 text-gray-800 font-medium list-none">
                    Services
                    <span className="transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>

                  <div className="mt-3 flex flex-col gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <Link
                      href="/tech"
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-lime-100 text-gray-700 hover:text-lime-600 font-medium transition-all"
                    >
                      Tech
                    </Link>
                    <Link
                      href="/tech"
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-lime-100 text-gray-700 hover:text-lime-600 font-medium transition-all"
                    >
                      Marketing
                    </Link>
                    <Link
                      href="/tech"
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 rounded-lg bg-gray-50 hover:bg-lime-100 text-gray-700 hover:text-lime-600 font-medium transition-all"
                    >
                      Finance
                    </Link>
                  </div>
                </details>

                <Link href="/projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 rounded-full border border-lime-400 text-black font-semibold bg-lime-200 hover:bg-lime-300 transition"
                >
                  Get Started →
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
