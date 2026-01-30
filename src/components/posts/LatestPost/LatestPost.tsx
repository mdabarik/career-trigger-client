"use server";
import PostCard from "@/components/posts/PostCard/PostCard";

export default async function LatestPost() {
  const res = await fetch("http://localhost:3001/api/posts?limit=6", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return (
    <>
      {data?.data.map((post: any) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
}
