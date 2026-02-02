import { useQuery } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const fetchCategoryById = async (id: string) => {
  const res = await privateClientAPI.get(`/api/posts/id/${id}`);
  return res.data;
};

export const useDashPost = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchCategoryById(id),
    enabled: !!id,
  });
};
