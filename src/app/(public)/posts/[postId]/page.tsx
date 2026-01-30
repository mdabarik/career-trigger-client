import { getPostByIdServer } from "@/lib/postsServer";
import Image from "next/image";
import React from "react";

const PostDetails = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;

  const res = await getPostByIdServer(postId);
  const post = res?.data;

  return (
    <div className="max-w-[1280px] mx-auto p-4 mt-5">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-96">
            {" "}
            <Image
              src={post?.photoUrl || "/placeholder.png"}
              alt={post?.title}
              fill
              className="rounded-md object-cover"
            />{" "}
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">{post?.title}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Author:</span>{" "}
            {post?.authorName || "Fake"}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Category:</span>{" "}
            {post?.categoryName || "Fake Cat"}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Description:</span>{" "}
            {post?.description || "Fake Desc"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
