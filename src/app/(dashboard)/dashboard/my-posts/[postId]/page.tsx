"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSearchCategories } from "@/features/dashboard/categories/useSearchCategories";
import { useUser } from "@/features/auth/useUser";
import { useParams } from "next/navigation";
import { useDashPost } from "@/features/dashboard/posts/useDashPost";
import { useUpdatePost } from "@/features/dashboard/posts/useUpdatePost";

const PostEditPage = () => {
  const { postId } = useParams();
  const { data: postData, isLoading: postLoading } = useDashPost(
    postId as string,
  );
  const [title, setTitle] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [authId, setAuthId] = useState("");
  const [pid, setPid] = useState(postId);

  useEffect(() => {
    setTitle(postData?.data?.title || "");
    setPhotoUrl(postData?.data?.photoUrl || "");
    setCategory(postData?.data?.categoryId || "");
    setDescription(postData?.data?.description || "");
    setAuthId(postData?.data?.authId || "");
  }, [postData]);

  const user = useUser();
  const { mutate: updatePost, isPending, isError, error } = useUpdatePost();
  const { data, isLoading: categoriesLoading } = useSearchCategories();

  if (postLoading || categoriesLoading) return "Loading...";

  const categories = data?.data || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title,
      description,
      photoUrl,
      categoryId: category,
      authorId: user?.id,
    };
    console.log(payload);
    updatePost({ id: postId, payload });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <Input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <Select value={category} onValueChange={(val) => setCategory(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat: any) => (
                <SelectItem key={cat._id} value={cat._id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* photoUrl */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PhotoURL
          </label>
          <Input
            type="text"
            placeholder="Enter photo url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>

        {/* content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <Textarea
            placeholder="Write your post description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[150px]"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="bg-red-600 text-white hover:bg-red-700"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update Post"}
        </Button>

        {isError && <p className="text-red-500">{error?.message}</p>}
      </form>
    </div>
  );
};

export default PostEditPage;
