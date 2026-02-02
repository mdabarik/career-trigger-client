import privateClientAPI from "@/lib/api/privateClientAPI.client";

export class DashboardPostsAPI {
  async getPosts(params: any) {
    const res = await privateClientAPI.get("/api/posts", {
      params,
    });
    return res.data;
  }

  async getPostById(id: string) {
    const res = await privateClientAPI.get(`/id/${id}`);
    return res.data;
  }
}

export const dashboardPostsAPI = new DashboardPostsAPI();
