import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";

const updateCategory = async ({
  id,
  payload,
}: {
  id: string;
  payload: any;
}) => {
  const res = await privateClientAPI.get(`/api/categories`);
  return res?.data?.data;
};

export const useCategories = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
