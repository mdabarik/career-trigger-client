import { useDashboardPosts } from "./useDashboardPosts";

export function useDashboardAllPosts() {
  return useDashboardPosts();
}

export function useDashboardSearchPosts(searchText: string) {
  return useDashboardPosts(undefined, searchText);
}
