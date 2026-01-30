export interface ICategory {
  _id: string;
  name: string;
}

export type TResponse<T> = {
  success: boolean;
  message?: string;
  statusCode: number;
  data: T;
};

export interface GetPostsParams {
  limit?: number;
  status?: "published" | "declined" | "pending";
  searchText?: string;
}
