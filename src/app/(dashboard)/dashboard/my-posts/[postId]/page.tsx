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

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const categories = ["Tech", "Lifestyle", "Education", "Business", "Health"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, category, content });
    // logic
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
          <Select onValueChange={(val) => setCategory(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
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
            value={title}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>

        {/* conetnt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <Textarea
            placeholder="Write your post content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[150px]"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="bg-red-600 text-white hover:bg-red-700"
        >
          Update Post
        </Button>
      </form>
    </div>
  );
};

export default AddNewPost;
