"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCategory } from "@/features/dashboard/categories/useCategory";
import { useParams } from "next/navigation";
import { useUpdateCategory } from "@/features/dashboard/categories/useUpdateCategories";

const EditCategoryPage = () => {
  const { catId } = useParams();
  const { data: category, isLoading } = useCategory(catId as string);
  const { mutate: updateCategory } = useUpdateCategory();

  const [name, setName] = useState("");

  useEffect(() => {
    if (category?.data?.name) {
      setName(category.data.name);
    }
  }, [category?.data?.name]);

  if (isLoading) return "Loading...";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated category:", { id: catId, name });
    // এখানে update hook কল করবে

    const payload = {
      categoryName: name,
    };

    updateCategory({ id: catId as string, payload });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <Button
          type="submit"
          className="bg-red-600 text-white hover:bg-red-700"
        >
          Update Category
        </Button>
      </form>
    </div>
  );
};

export default EditCategoryPage;
