import { Button } from "@/components/ui/button";
import Sidebar from "@/components/modules/Home/Sidebar";
import LatestPost from "@/components/frontend/shared/LatestPost/LatestPost";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-start max-w-[1280px] mx-auto">
        {/* Left: Posts */}
        <div className="w-[70%] my-7">
          <div className="mb-4">
            <h2 className="font-bold text-xl">Latest Posts</h2>
          </div>

          {/* Top 6 Latest Posts */}
          <div className="grid grid-cols-2 gap-6 w-full">
            <LatestPost limit={6} />
          </div>

          <div className="flex justify-center m-8">
            <Button
              variant="outline"
              className="border-red-600 px-10 py-5 text-md text-red-600 hover:bg-red-50"
            >
              <Link href="/posts?page=1&limit=10">View All Posts</Link>
            </Button>
          </div>
        </div>

        {/* Right: Sidebar (unchanged) */}
        <div className="flex flex-col w-[30%] h-full ml-4 mt-[75px] gap-6">
          {/* Search + Categories */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
