import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const deleteCategory = async (id: string) => {
  const res = await privateClientAPI.delete(`/api/categories/del-cat/${id}`);
  return res.data;
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
