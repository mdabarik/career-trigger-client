import authOptions from "@/helper/authOptions";
import { getServerSession } from "next-auth";

const Dashbaordpage = async () => {
  const session = await getServerSession(authOptions);

  console.log("dashboard/page.tsx", session);

  return <div>Dashboard Home</div>;
};

export default Dashbaordpage;
