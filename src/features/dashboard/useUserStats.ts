import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useQuery } from "@tanstack/react-query";

const fetchStats = async () => {
  const res = await privateClientAPI.get("/api/users/user-stats");
  return res.data.data;
};

export const useUserStats = () => {
  return useQuery({
    queryKey: ["user-stats"],
    queryFn: fetchStats,
    staleTime: 1000 * 60,
  });
};
