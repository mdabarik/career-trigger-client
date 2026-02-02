import { useQuery } from "@tanstack/react-query";
import { dashboardPostsAPI } from "./dashboardPostsAPI";

export function useDashboardPosts(
  status?: "published" | "declined" | "pending",
  searchText?: string,
) {
  return useQuery({
    queryKey: ["posts", status, searchText],
    queryFn: async () => {
      const response = await dashboardPostsAPI.getPosts({
        status,
        searchText,
      });
      return response;
    },
  });
}
