import Container from "@/components/common/Container/Container";
import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
