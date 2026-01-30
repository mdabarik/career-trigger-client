"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PostCard from "@/components/posts/PostCard/PostCard";
import { useSearchPosts } from "@/features/public/posts/postsHook";

const PostPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialSearch = searchParams.get("searchText") || "";
  const [searchText, setSearchText] = useState(initialSearch);

  useEffect(() => {
    if (searchText.trim()) {
      router.replace(`/posts?searchText=${encodeURIComponent(searchText)}`);
    } else {
      router.replace(`/posts`);
    }
  }, [searchText, router]);

  const { data, isLoading, error } = useSearchPosts(searchText);

  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="flex flex-row justify-between items-start max-w-[1280px] mx-auto">
      <div className="w-full my-7">
        <h2 className="font-bold text-xl mb-4">Latest Posts</h2>

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
          {isLoading && <p>Loading...</p>}
          {data?.data.length === 0 && <p>No Post Found</p>}
          {data?.data?.map((post: any) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
