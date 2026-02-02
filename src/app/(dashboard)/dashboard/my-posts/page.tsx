"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDashboardSearchPosts } from "@/features/dashboard/posts/postsHooks";

const PostPageDashboard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = searchParams?.get("search") ?? "";
  const [search, setSearch] = useState(initial);

  useEffect(() => {
    const url =
      search && search.trim()
        ? `/dashboard/my-posts?search=${encodeURIComponent(search)}`
        : `/dashboard/my-posts`;
    router.replace(url);
  }, [search, router]);

  const {
    data: postsData,
    isLoading,
    isError,
  } = useDashboardSearchPosts(search);

  const posts = postsData?.data ?? [];

  if (isError) return <p>Failed to load categories</p>;

  console.log(posts, "from my-posts");

  // const posts = [
  //   {
  //     id: 1,
  //     title: "First Post",
  //     category: "Tech",
  //     author: "John Doe",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2,
  //     title: "Second Post",
  //     category: "Lifestyle",
  //     author: "Jane Smith",
  //     status: "Pending",
  //   },
  //   {
  //     id: 3,
  //     title: "Third Post",
  //     category: "Education",
  //     author: "Admin",
  //     status: "Rejected",
  //   },
  // ];

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          My Posts: {posts.length}
        </h2>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search Posts..."
            className="w-full md:w-64"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="bg-red-600 text-white hover:bg-red-700">
            <Link href={"/dashboard/my-posts/add-new-posts"}>Add New Post</Link>
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">SL</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow key={post.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{post?.title}</TableCell>
                <TableCell>{post?.categoryName}</TableCell>
                <TableCell>{post?.authorName}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      post?.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : post?.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {post?.status}
                  </span>
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>

                  {/* Delete with Confirmation Modal */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="bg-red-600 text-white hover:bg-red-700"
                      >
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. It will permanently
                          delete <strong>{post.title}</strong>.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 text-white hover:bg-red-700"
                          onClick={() => {
                            console.log("Deleted post:", post.id);
                          }}
                        >
                          Confirm Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PostPageDashboard;
