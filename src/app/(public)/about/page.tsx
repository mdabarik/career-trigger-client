import React from "react";
import Image from "next/image";
import Navbar from "../../../components/common/Navbar/Navbar";

const AboutPage = async () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <Image
          src="https://img.freepik.com/free-vector/business-team-concept-illustration_114360-678.jpg"
          alt="About Us Illustration"
          width={400}
          height={300}
          className="rounded-lg shadow-lg mb-6"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

        <p className="text-gray-600 text-center max-w-2xl leading-relaxed">
          We are a passionate team dedicated to building innovative solutions
          that make life easier. Our mission is to connect people, ideas, and
          technology in meaningful ways. With creativity and commitment, we
          strive to deliver excellence in every project we undertake.
        </p>

        <div className="mt-8 bg-white shadow-md rounded-lg p-6 max-w-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To empower communities through technology, inspire innovation, and
            create lasting impact across industries worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
