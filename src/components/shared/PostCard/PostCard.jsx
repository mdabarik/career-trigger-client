// components/shared/Card/card.tsx
"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PostCard({ post }) {
  // console.log("from PostCard.tsx", post);

  return (
    <Card className="bg-white text-black overflow-hidden rounded-[20px] shadow-md shadow-red-200">
      {/* Post Image */}
      <div className="relative w-full h-[200px]">
        <Image
          src={post.photoUrl || "https://via.placeholder.com/400"}
          alt={post?.title}
          width={600}
          height={250}
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#00000040] to-transparent" />
      </div>

      {/* Body */}
      <div className="relative -mt-6 bg-white rounded-t-[20px] p-4">
        <CardHeader className="px-3 py-2">
          <CardTitle className="text-lg font-bold text-gray-900">
            {post.title}
          </CardTitle>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <CardDescription className="text-xs text-gray-600 mt-2">
            {post.details}
          </CardDescription>
        </CardHeader>

        <CardFooter className="px-3 py-2">
          <Button className="w-full bg-red-600 rounded-[50px] text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-300 shadow-md shadow-red-300">
            <Link href={`/posts/${post?._id}`}>View This Post</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
