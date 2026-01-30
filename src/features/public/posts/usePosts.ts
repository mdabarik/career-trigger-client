import { useQuery } from "@tanstack/react-query";
import { IPost, TResponse } from "./types";
import { postsAPI } from "./postsAPI";

export function usePosts(
  limit?: number,
  status?: "published" | "declined" | "pending",
  searchText?: string,
) {
  return useQuery({
    queryKey: ["posts", { limit, status, searchText }],
    queryFn: async () => {
      const response = await postsAPI.getPosts({
        limit,
        status,
        searchText,
      });
      return response as TResponse<IPost[]>;
    },
  });
}
