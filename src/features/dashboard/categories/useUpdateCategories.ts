import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const updateCategory = async ({
  id,
  payload,
}: {
  id: string;
  payload: any;
}) => {
  const res = await privateClientAPI.put(
    `/api/categories/update-cat/${id}`,
    payload,
  );
  return res.data;
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
