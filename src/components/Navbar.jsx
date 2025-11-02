import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-winagreen text-white font-bold">
              W
            </div>
            <div className="font-semibold text-winablue text-lg">WinAClaim</div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-600">
          <li className="hover:text-winablue cursor-pointer">Home</li>
          <li className="hover:text-winablue cursor-pointer">Features</li>
          <li className="hover:text-winablue cursor-pointer">Pricing</li>
          <li className="hover:text-winablue cursor-pointer">Contact</li>
          <li className="hover:text-winablue cursor-pointer">FAQ</li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Sign In */}
          <Link
            to="/signin"
            className="hidden md:inline-block px-4 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-100 transition"
          >
            Sign In
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-winablue text-white text-sm shadow hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
