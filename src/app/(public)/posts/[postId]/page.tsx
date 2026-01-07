import React from "react";

const PostDetails = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  console.log(postId);
  return <div>PostDetails</div>;
};

export default PostDetails;
