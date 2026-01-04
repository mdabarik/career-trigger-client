import Navbar from "@/components/shared/Navbar/navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto">{children}</div>
    </div>
  );
};

export default HomeLayout;
