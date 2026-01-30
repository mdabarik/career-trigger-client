import { useQuery } from "@tanstack/react-query";
import { ICategory, TResponse } from "./types";
import { categoriesAPI } from "./categoriesAPI";

export function useCatById(id: string) {
  return useQuery({
    queryKey: ["categories", id],
    queryFn: async () => {
      const response = await categoriesAPI.getCategoryById(id);
      return response as TResponse<ICategory>;
    },
  });
}
