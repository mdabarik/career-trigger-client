import { useQuery } from "@tanstack/react-query";
import { ICategory, TResponse } from "./types";
import { categoriesAPI } from "./categoriesAPI";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await categoriesAPI.getCategories();
      return response as TResponse<ICategory[]>;
    },
  });
}
