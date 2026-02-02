import { useQuery } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const categoriesAPI = {
  getCategories: async (params?: { search?: string }) => {
    const res = await privateClientAPI.get("/api/categories", {
      params: params && params.search ? { search: params.search } : {},
    });
    return res.data;
  },
};

export const useSearchCategories = (search?: string) => {
  return useQuery({
    queryKey: ["categories", search ?? ""],
    queryFn: async () => {
      const response = await categoriesAPI.getCategories({ search });
      return response;
    },
    staleTime: 1000 * 10,
  });
};
