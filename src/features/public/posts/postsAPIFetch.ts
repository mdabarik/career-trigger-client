import { buildQuery } from "@/utils/buildQuery";
import { GetPostsParams, IPost, TResponse } from "./types";

export class PostsAPIFetch {
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3001/api/posts") {
    this.baseUrl = baseUrl;
  }

  async getPosts(params?: GetPostsParams): Promise<TResponse<IPost[]>> {
    const query = buildQuery(params);

    const response = await fetch(`${this.baseUrl}/${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return response.json();
  }

  async getPostById(id: string): Promise<IPost> {
    const response = await fetch(`${this.baseUrl}/id/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    return response.json();
  }
}

export const postAPIFetch = new PostsAPIFetch();
