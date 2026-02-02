import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

type UpdateArgs = { id: string; payload: any };

const updatePost = async ({ id, payload }: UpdateArgs) => {
  const res = await privateClientAPI.patch(
    `/api/posts/update-post-status/${id}`,
    payload,
  );
  return res.data;
};

export const useUpdateStatusById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["posts"], exact: false });

      if (updatedPost?._id) {
        queryClient.invalidateQueries({
          queryKey: ["post", String(updatedPost._id)],
        });
      }
    },
    onError: (err) => {
      console.error("Failed to update post status", err);
    },
  });
};
