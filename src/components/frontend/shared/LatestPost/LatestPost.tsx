import PostCard from "@/components/shared/PostCard/PostCard";

const LatestPost = async ({ limit }) => {
  const res = await fetch(
    `http://localhost:3001/api/posts?sortById=desc&status=published&limit=${limit}&page=1`,
    {
      cache: "no-store",
    }
  );

  const jsonDATA = await res.json();
  const posts = jsonDATA.data.posts;

  console.log("LatestPosts.tsx", posts[0]);

  return (
    <>
      {posts?.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </>
  );
};

export default LatestPost;
