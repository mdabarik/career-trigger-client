import privateClientAPI from "@/lib/api/privateClientAPI.client";
export const postsAPI = {
  getPosts: async ({ searchText }: { searchText?: string }) => {
    const res = await privateClientAPI.get("/api/posts", {
      params: { searchText },
    });
    return res.data;
  },
};

export const useCategories = (search?: string) => {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () => fetchCategories(search),
  });
};
