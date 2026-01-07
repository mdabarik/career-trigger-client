"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube, BsFacebook } from "react-icons/bs";
import QRCode from "react-qr-code";

const Footer = () => {
  return (
    <footer className="p-6 drop-shadow bg-base-100 border-t border-gray-300 mb-[0vh]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-6 lg:gap-y-0">
        {/* Left Section: Logo + Name */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="flex items-center justify-center mx-auto">
            {/* favicon.ico as logo */}
            <Image
              src="/favicon.ico"
              alt="Career Trigger Logo"
              width={48}
              height={48}
            />
          </div>
          <p className="font-bold text-lg md:text-xl lg:text-2xl mt-2 lg:mt-0">
            Career <span className="text-[#3498db]">Trigger</span>
          </p>
        </div>

        {/* Middle Section: Explore Content */}
        <div className="mb-4 md:mb-0 text-center lg:mb-0">
          <h3 className="text-xl font-bold lg:text-xl mb-2">Explore Content</h3>
          <div className="flex flex-wrap text-center justify-center items-center gap-4 text-[12px] md:text-sm lg:text-lg">
            <Link href="/" className="text-sm lg:text-base">
              Home
            </Link>
            <Link href="/posts" className="text-sm lg:text-base">
              All Posts
            </Link>
            <Link href="/quizes" className="text-sm lg:text-base">
              Quizes
            </Link>
            <Link href="/contact" className="text-sm lg:text-base">
              Contact
            </Link>
            <Link href="/about" className="text-sm lg:text-base">
              About Us
            </Link>
            <Link href="/login" className="text-sm lg:text-base">
              Sign In
            </Link>
            <Link href="/register" className="text-sm lg:text-base">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right Section: Social Links */}
        <div className="text-center">
          <h3 className="text-lg lg:text-xl mb-2 font-bold">Connect with Us</h3>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <Link href="#" className="text-[#1DA1F2] hover:text-[#1DA1F2]">
              <FaTwitter className="text-2xl lg:text-3xl" />
            </Link>
            <Link href="#" className="text-[#FF0000] hover:text-[#FF0000]">
              <BsYoutube className="text-2xl lg:text-3xl" />
            </Link>
            <Link href="#" className="text-[#1877F2] hover:text-[#1877F2]">
              <BsFacebook className="text-2xl lg:text-3xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center text-xs lg:text-sm mt-4">
        <p>Call us: +8801750837498 (10AM-10PM)</p>
        <p>Email: mdabarik19@gmail.com</p>
      </div>
      <div className="text-center text-xs lg:text-sm mt-4">
        <p>Location: 123 Main Street, Cityville, State 12345</p>
        <p>USA, United States of America</p>
      </div>

      {/* QR Code */}
      <div className="mt-4">
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={
              "email: mdabarik19@gmail.com, phone: +8801330759741, YouTube: YouTube.com"
            }
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t-2 mt-6">
        <p className="mt-6 text-xs lg:text-sm">
          All Rights Reserved &copy; 2023-2029
        </p>
        <p className="text-xs lg:text-sm">
          Developed by{" "}
          <Link
            href="https://www.linkedin.com/in/mdabarik"
            target="_blank"
            className="text-red-600 hover:underline"
          >
            Md. A. Barik
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
