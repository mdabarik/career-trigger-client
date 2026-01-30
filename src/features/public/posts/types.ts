export interface IPost {
  title: string;
  categoryId: string;
  photoUrl: string;
  description: string;
  authorId: string;
  status: "declined" | "published" | "pending";
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
