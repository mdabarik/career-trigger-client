import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useRouter } from "next/navigation";

const createPost = async (payload: any) => {
  const res = await privateClientAPI.post("/api/posts/create", payload);
  return res.data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/dashboard/my-posts");
    },
    onError: (error: any) => {
      console.error("Create failed:", error);
    },
  });
};
