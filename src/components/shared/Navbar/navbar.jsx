"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-8 py-2 bg-background border-b border-red-100 shadow-[0_4px_10px_rgba(220,38,38,0.2)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-red-600">
          CareerTrigger
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/about" className="hover:text-red-600">
            About
          </Link>
          <Link href="/services" className="hover:text-red-600">
            Services
          </Link>
          <Link href="/contact" className="hover:text-red-600">
            Contact
          </Link>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Sign In
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-red-600" />
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-12 left-0 w-full bg-background border-b flex flex-col gap-2 p-4 md:hidden">
            <Link href="/about" className="hover:text-red-600">
              About
            </Link>
            <Link href="/services" className="hover:text-red-600">
              Services
            </Link>
            <Link href="/contact" className="hover:text-red-600">
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Sign In
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
