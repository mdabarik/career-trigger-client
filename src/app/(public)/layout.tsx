import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
