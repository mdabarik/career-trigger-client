import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useQuery } from "@tanstack/react-query";

const fetchStats = async () => {
  const res = await privateClientAPI.get("/api/posts/stats");
  return res.data.data;
};

export const useStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
    staleTime: 1000 * 60,
  });
};
