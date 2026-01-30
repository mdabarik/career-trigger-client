"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import PostCard from "@/components/posts/PostCard/PostCard";
import { usePostByCatId } from "@/features/public/posts/postsHook";
import { useCatById } from "@/features/public/categories/useCatById";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { catId } = useParams();

  // category fetch
  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useCatById(catId);

  const initialSearch = searchParams.get("searchText") || "";
  const [searchText, setSearchText] = useState(initialSearch);
  const [categoryName, setCategoryName] = useState("Loading...");

  // update category name when data arrives
  useEffect(() => {
    if (categoryData?.data?.name) {
      setCategoryName(categoryData.data.name);
    }
  }, [categoryData]);

  // update URL when search changes
  useEffect(() => {
    if (searchText.trim()) {
      router.replace(
        `/category/${catId}/posts?searchText=${encodeURIComponent(searchText)}`,
      );
    } else {
      router.replace(`/category/${catId}/posts`);
    }
  }, [searchText, router, catId]);

  // posts fetch
  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
  } = usePostByCatId(searchText, catId);

  if (postsError || categoryError) return <p>Something went wrong!</p>;

  return (
    <div className="flex flex-row justify-between items-start max-w-[1280px] mx-auto">
      <div className="w-full my-7">
        <h2 className="font-bold text-xl mb-4">Category: {categoryName}</h2>

        {/* search box */}
        <div className="flex w-[50%] pb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 
               rounded-md focus:outline-none focus:ring-2 
               focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {/* posts grid */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {isPostsLoading && <p>Loading...</p>}
          {postsData?.data?.length === 0 && <p>No Post Found</p>}
          {postsData?.data?.map((post: any) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
