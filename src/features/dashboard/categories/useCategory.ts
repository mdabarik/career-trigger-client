import { useQuery } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const fetchCategoryById = async (id: string) => {
  const res = await privateClientAPI.get(`/api/categories/id/${id}`);
  return res.data;
};

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryById(id),
    enabled: !!id,
  });
};
