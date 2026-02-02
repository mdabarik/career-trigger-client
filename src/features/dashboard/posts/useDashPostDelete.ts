import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const deleteCategory = async (id: string) => {
  const res = await privateClientAPI.delete(`/api/posts/delete/${id}`);
  return res.data;
};

export const useDashPostDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
