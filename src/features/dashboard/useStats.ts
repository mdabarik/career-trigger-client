// import privateClientAPI from "@/lib/api/privateClientAPI.client";
// import { useQuery } from "@tanstack/react-query";

// const fetchStats = async () => {
//   const res = await privateClientAPI.get("/api/posts/stats");
//   return res.data.data;
// };

// export const useStats = () => {
//   return useQuery({
//     queryKey: ["stats"],
//     queryFn: fetchStats,
//     staleTime: 1000 * 60,
//   });
// };

// hooks/useStats.ts
import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useQuery } from "@tanstack/react-query";

const fetchStats = async (id?: string) => {
  console.log(id, "fetchStats");
  const res = await privateClientAPI.get("/api/posts/stats", {
    params: id ? { id } : {},
  });
  return res.data.data;
};

export const useStats = (id?: string) => {
  return useQuery({
    queryKey: ["stats", id ?? ""],
    queryFn: () => fetchStats(id),
    staleTime: 1000 * 60,
  });
};
