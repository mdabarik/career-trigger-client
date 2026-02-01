"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LogoIcon from "../Logo/Logo";
import { usePathname } from "next/navigation";
import { useAuth } from "@/features/auth/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { user, logout } = useAuth();
  console.log(user, "userlogin");

  const linkClasses = (href) =>
    pathname === href ? "text-red-600 font-semibold" : "hover:text-red-600";

  return (
    <nav className="px-8 py-3 bg-background border-b border-red-100 shadow-[0_4px_10px_rgba(220,38,38,0.2)] min-h-[60px] w-full">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-red-600 flex items-center"
        >
          <span className="mr-2">
            <LogoIcon size={27} />
          </span>
          CareerTrigger
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/posts" className={linkClasses("/posts")}>
            All Posts
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About
          </Link>

          {/* Static User Buttons */}
          {user == null ? (
            <>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                <Link href="/register">Register</Link>
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => logout()}>Logout</Button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-red-600" />
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-12 left-0 w-full bg-background border-b flex flex-col gap-2 p-4 md:hidden">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link href="/posts" className={linkClasses("/posts")}>
              All Posts
            </Link>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact
            </Link>
            <Link href="/about" className={linkClasses("/about")}>
              About
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Login
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
