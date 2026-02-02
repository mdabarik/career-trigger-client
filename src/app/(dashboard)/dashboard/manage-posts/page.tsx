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
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDashboardSearchPosts } from "@/features/dashboard/posts/postsHooks";
import { useDashPostDelete } from "@/features/dashboard/posts/useDashPostDelete";
import { useUpdateStatusById } from "@/features/dashboard/posts/useUpdateStatusById";

const ManagePostAdminEditor = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = searchParams?.get("search") ?? "";
  const [search, setSearch] = useState(initial);

  // mutation
  const { mutate: updateStatus, isPending } = useUpdateStatusById();

  useEffect(() => {
    const url =
      search && search.trim()
        ? `/dashboard/manage-posts?search=${encodeURIComponent(search)}`
        : `/dashboard/manage-posts`;
    router.replace(url);
  }, [search, router]);

  const {
    data: postsData,
    isLoading,
    isError,
  } = useDashboardSearchPosts(search);

  const posts = postsData?.data ?? [];

  if (isLoading) return "Loading...";

  if (isError) return <p>Failed to load posts</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          My Posts: {posts?.length}
        </h2>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search Posts..."
            className="w-full md:w-64"
            value={search} // controlled input
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
            {posts.map((post, index) => {
              const id = String(post?._id ?? "");
              return (
                <TableRow key={id || index}>
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
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={isPending}
                      onClick={() => {
                        const payload = { status: "published" };
                        console.log("Updating post", { id, payload });
                        updateStatus({ id, payload });
                      }}
                    >
                      Approve
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      disabled={isPending}
                      onClick={() => {
                        const payload = { status: "declined" };
                        console.log("Updating post", { id, payload });
                        updateStatus({ id, payload });
                      }}
                    >
                      Decline
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManagePostAdminEditor;
