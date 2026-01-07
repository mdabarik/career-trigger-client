import Container from "@/components/shared/Container/Container";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/navbar";
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
