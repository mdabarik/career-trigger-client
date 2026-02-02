import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useQuery } from "@tanstack/react-query";

const fetchStats = async () => {
  const res = await privateClientAPI.get("/api/categories/cat-stats");
  return res.data.data;
};

export const useCatStats = () => {
  return useQuery({
    queryKey: ["cat-stats"],
    queryFn: fetchStats,
    staleTime: 1000 * 60,
  });
};
