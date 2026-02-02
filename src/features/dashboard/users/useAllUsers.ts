import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useQuery } from "@tanstack/react-query";

const fetchAllUsers = async () => {
  const res = await privateClientAPI.get("/api/users/all-users");
  return res?.data?.data;
};

export const useAllUsers = () => {
  return useQuery({
    queryKey: ["all-users"],
    queryFn: fetchAllUsers,
    staleTime: 1000 * 60,
  });
};
