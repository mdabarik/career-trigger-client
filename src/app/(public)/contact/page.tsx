"use client";

import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="https://img.freepik.com/free-vector/contact-us-icon-flat-style_1284-49364.jpg"
          alt="Contact Us Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <p className="text-gray-700 mb-2">📍 Address: 123 Fake Street, Dhaka</p>
        <p className="text-gray-700 mb-2">📞 Phone: +880 1234 567890</p>
        <p className="text-gray-700 mb-2">✉️ Email: contact@fakecompany.com</p>
        <p className="text-gray-700">
          🕒 Office Hours: Sat–Thu, 9:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
