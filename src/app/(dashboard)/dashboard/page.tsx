import authOptions from "@/helper/authOptions";
import { getServerSession } from "next-auth";
import StatisticsPage from "./statistics/page";

const Dashbaordpage = async () => {
  const session = await getServerSession(authOptions);


  return <StatisticsPage />;
};

export default Dashbaordpage;
