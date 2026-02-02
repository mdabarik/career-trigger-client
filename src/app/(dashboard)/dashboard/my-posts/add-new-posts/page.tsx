"use client";

import { useState } from "react";
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
import { useCreatePost } from "@/features/dashboard/posts/useCreatePost";

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const user = useUser();
  const { mutate: createPost, isPending, isError, error } = useCreatePost();
  const { data, isLoading } = useSearchCategories();
  if (isLoading) return "Loading...";
  const categories = data?.data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: title,
      description: description,
      photoUrl: photoUrl,
      categoryId: category,
      authorId: user?.id,
    };
    // console.log(payload);
    createPost(payload);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Post</h2>
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
          <Select onValueChange={(val) => setCategory(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat?._id} value={cat?._id}>
                  {cat?.name}
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

        {/* conetnt */}
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
        >
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default AddNewPost;
