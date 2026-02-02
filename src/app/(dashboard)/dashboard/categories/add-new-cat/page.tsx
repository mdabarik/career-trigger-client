"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateCategory } from "@/features/dashboard/categories/useCreateCategory";

const AddNewCategory = ({
  category,
}: {
  category: { id: number; name: string };
}) => {
  const [name, setName] = useState(category?.name);
  const {
    mutate: createCategory,
    isPending,
    isError,
    error,
  } = useCreateCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Updated category:", { id: category?.id, name });
    // logic
    const payload = { categoryName: name };
    createCategory(payload as any);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Name
          </label>
          <Input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="bg-red-600 text-white hover:bg-red-700"
        >
          Create Category
        </Button>
      </form>
    </div>
  );
};

export default AddNewCategory;
