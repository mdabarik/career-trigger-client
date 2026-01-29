export interface IPost {
  title: string;
  categoryId: string;
  photoUrl: string;
  description: string;
  authorId: string;
  status: "declined" | "published" | "pending";
}
