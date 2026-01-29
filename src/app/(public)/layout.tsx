import Container from "@/components/common/Container/Container";
import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Container>
        <div className="min-h-[90vh]">{children}</div>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
