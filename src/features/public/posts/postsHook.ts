import { usePosts } from "./usePosts";

export function useNewPosts() {
  return usePosts(6);
}

export function usePublishedPosts() {
  return usePosts(undefined, "published");
}

export function useAllPosts() {
  return usePosts();
}

export function useSearchPosts(searchText: string) {
  return usePosts(undefined, "published", searchText);
}

export function usePostByCatId(searchText: string, categoryId: string) {
  return usePosts(undefined, "published", searchText, categoryId);
}
