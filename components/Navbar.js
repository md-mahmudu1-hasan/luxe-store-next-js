"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, LogIn, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const isActive = (path) =>
    pathname === path ? "text-blue-500" : "text-neutral-400 hover:text-white";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              LuxeStore
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${isActive("/")}`}
            >
              Home
            </Link>
            <Link
              href="/items"
              className={`text-sm font-medium transition-colors ${isActive("/items")}`}
            >
              Item List
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${isActive("/about")}`}
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-500 transition-all hover:shadow-lg hover:shadow-red-500/25 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/items"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:bg-white/10 hover:text-white"
            >
              Marketplace
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:bg-white/10 hover:text-white"
            >
              About
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
                className="w-full text-left flex items-center justify-center gap-2 px-3 py-2 mt-4 rounded-md text-base font-medium bg-red-600 text-white"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-blue-600 text-white"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
