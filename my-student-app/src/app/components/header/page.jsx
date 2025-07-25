"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-700 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          SchoolConnect
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/feature" className="hover:underline">
            Features
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
              className="flex items-center hover:underline focus:outline-none"
            >
              Login <IoMdArrowDropdown className="ml-1" />
            </button>
            {loginDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg z-50">
                <Link
                  href="/Login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Student Login
                </Link>
                <Link
                  href="/Login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Lecturer Login
                </Link>
                <Link
                  href="/Login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Admin Login
                </Link>
              </div>
            )}
          </div>

          {/* Register Button */}
          <Link
            href="/Register"
            className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-100"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-4 space-y-2">
          <Link href="/" className="block py-2 border-b border-blue-500">
            Home
          </Link>
          <Link href="/about" className="block py-2 border-b border-blue-500">
            About
          </Link>
          <Link href="/feature" className="block py-2 border-b border-blue-500">
            Features
          </Link>
          <Link href="/contact" className="block py-2 border-b border-blue-500">
            Contact
          </Link>

          <div className="border-t border-blue-500 pt-2" cd>
            <p className="text-sm mb-1">Login as:</p>
            <Link href="/login" className="block py-1">
              Student
            </Link>
            <Link href="/login" className="block py-1">
              Lecturer
            </Link>
            <Link href="/login" className="block py-1">
              Admin
            </Link>
          </div>

          <Link
            href="/Register"
            className="block bg-white text-blue-700 px-4 py-2 mt-2 rounded text-center"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
