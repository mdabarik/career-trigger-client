import { Button } from "@/components/ui/button";
import PostCard from "@/components/shared/PostCard/PostCard";

const AllPosts = async () => {
  const res = await fetch("http://localhost:3001/api/posts", {
    cache: "no-store",
  });

  const resJson = await res.json();

  const posts = resJson.data.posts;

  console.log("posts", posts);

  return (
    <div>
      <div className="flex flex-row justify-between items-start max-w-[1280px] mx-auto">
        {/* Left: Posts */}
        <div className="w-[70%] my-7">
          <div className="mb-4">
            <h2 className="font-bold text-xl">Latest Posts</h2>
          </div>

          {/* Render posts dynamically */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {posts?.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          <div className="flex justify-center m-8">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              View All Posts
            </Button>
          </div>
        </div>

        {/* Right: Sidebar (unchanged) */}
        <div className="flex flex-col w-[30%] h-full ml-2 mt-[75px] gap-6">
          {/* Search + Categories */}
          {/* ... keep your sidebar code */}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
