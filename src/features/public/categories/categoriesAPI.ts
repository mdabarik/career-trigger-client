import axios, { AxiosInstance } from "axios";
import { ICategory, TResponse } from "./types";

export class CategoriesAPI {
  private client: AxiosInstance;
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3001/api/categories") {
    this.baseUrl = baseUrl;
    this.client = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async getCategories(): Promise<TResponse<ICategory[]>> {
    const response = await this.client.get<TResponse<ICategory[]>>("/");
    return response.data;
  }

  async getCategoryById(id: string): Promise<TResponse<ICategory>> {
    const response = await this.client.get<TResponse<ICategory>>(`/id/${id}`);
    return response.data;
  }
}

export const categoriesAPI = new CategoriesAPI();
