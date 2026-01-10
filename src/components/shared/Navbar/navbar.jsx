"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LogoIcon from "@/components/shared/Logo/Logo";
import { useParams, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { Spinner } from "@/components/ui/spinner";
import { signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("bottom");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const { data, status } = useSession();
  console.log("session", data, status);

  const handleLogout = () => {
    console.log("handle signout");
    signOut({ callbackUrl: "/login" });
  };

  return (
    <nav className="px-8 py-2 bg-background border-b border-red-100 shadow-[0_4px_10px_rgba(220,38,38,0.2)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-red-600 flex">
          <span className="mr-2">
            {" "}
            <LogoIcon size={27} />{" "}
          </span>
          CareerTrigger
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/"
            className={pathname === "/" ? "text-red-500" : "hover:text-red-600"}
          >
            Home
          </Link>
          <Link
            href="/posts?page=1&limit=10"
            className={
              pathname === "/posts" ? "text-red-500" : "hover:text-red-600"
            }
          >
            All Posts
          </Link>
          <Link
            href="/quizes"
            className={
              pathname === "/quizes" ? "text-red-500" : "hover:text-red-600"
            }
          >
            Quizes
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "text-red-500" : "hover:text-red-600"
            }
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about" ? "text-red-500" : "hover:text-red-600"
            }
          >
            About
          </Link>

          {status === "loading" ? (
            <Spinner className="text-3xl text-red-500" />
          ) : status === "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[50px] h-[50px] rounded-[100px] border-2 border-red-500"
                >
                  M
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="text-center border-2 w-[200px] flex flex-col justify-center items-center shadow-md shadow-red-400 py-3"
                align="end"
              >
                <DropdownMenuLabel className="border-b-2 border-b-red-200 w-[100%]">
                  You are Logged In
                </DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                {/* <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              > */}
                <DropdownMenuItem className="w-[100%] flex justify-center">
                  <Link href={"/dashboard/profile"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[100%] flex justify-center">
                  <Link href={"/dashborad"}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[100%] flex justify-center">
                  <Button
                    onClick={() => handleLogout()}
                    className="bg-red-600 hover:bg-red-700 text-white w-[100%]"
                  >
                    <Link href="#">Logout</Link>
                  </Button>
                </DropdownMenuItem>
                {/* </DropdownMenuRadioGroup> */}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {/* login & register */}
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="login">Login</Link>
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                <Link href="register">Register</Link>
              </Button>
              {/* login & register end */}
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
