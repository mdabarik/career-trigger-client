import { useQuery } from "@tanstack/react-query";
import { postsAPI } from "./postsAPI";
import { IPost } from "./types";

export const usePosts = () => {
  return useQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: () => postsAPI.getPosts(),
    staleTime: 1000 * 60,
  });
};
