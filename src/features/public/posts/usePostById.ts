import { useQuery } from "@tanstack/react-query";
import { postsAPI } from "./postsAPI";
import { IPost } from "./types";

export const usePostById = (id: string) => {
  return useQuery<IPost>({
    queryKey: ["post", id],
    queryFn: () => postsAPI.getPostById(id),
    enabled: !!id,
  });
};
