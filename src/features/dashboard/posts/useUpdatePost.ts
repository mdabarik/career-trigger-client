import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const updatePost = async ({ id, payload }: { id: string; payload: any }) => {
  const res = await privateClientAPI.put(`/api/posts/update/${id}`, payload);
  return res.data;
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
    },
  });
};
