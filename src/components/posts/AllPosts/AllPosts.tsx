"use client";

import PostCard from "@/components/posts/PostCard/PostCard";
import { Pagination, Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { usePosts } from "@/features/public/posts/usePosts"; // ✅ custom hook

const AllPosts = () => {
  const router = useRouter();

  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  console.log(data.data, "data from allposts.tsx");

  return (
    <div className="flex flex-row justify-between items-start max-w-[1280px] mx-auto">
      <div className="w-full my-7">
        <h2 className="font-bold text-xl mb-4">Latest Posts</h2>

        {/* search field */}
        <div className="flex w-[50%] pb-4 gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {/* posts grid */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {data?.data?.map((post: any) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
