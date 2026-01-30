import axios, { AxiosInstance } from "axios";
import { GetPostsParams, IPost, TResponse } from "./types";

export class PostsAPI {
  private client: AxiosInstance;
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3001/api/posts") {
    this.baseUrl = baseUrl;
    this.client = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async getPosts(params?: GetPostsParams): Promise<TResponse<IPost[]>> {
    const response = await this.client.get<TResponse<IPost[]>>("/", {
      params,
    });
    return response.data;
  }

  async getPostById(id: string): Promise<IPost> {
    const response = await this.client.get<IPost>(`/id/${id}`);
    return response.data;
  }
}

export const postsAPI = new PostsAPI();
