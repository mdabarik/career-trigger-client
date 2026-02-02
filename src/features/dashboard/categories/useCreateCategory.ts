import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateClientAPI from "@/lib/api/privateClientAPI.client";
import { useRouter } from "next/navigation";

const createCategory = async (payload: { name: string }) => {
  const res = await privateClientAPI.post(
    "/api/categories/create-cat",
    payload,
  );
  return res.data;
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      router.push("/dashboard/categories");
    },
    onError: (error: any) => {
      console.error("Create failed:", error);
    },
  });
};
