import Container from "@/components/common/Container/Container";
import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import { getUserFromCookie } from "@/lib/auth.server";
import { cookies } from "next/headers";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getUserFromCookie();

  console.log(data, "layout.tsx");

  return (
    <div>
      <div>
        <Navbar user={data} />
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
