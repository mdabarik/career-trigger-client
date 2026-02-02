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

const ManagePost = () => {
  const posts = [
    {
      id: 1,
      title: "First Post",
      category: "Tech",
      author: "John Doe",
      status: "Approved",
    },
    {
      id: 2,
      title: "Second Post",
      category: "Lifestyle",
      author: "Jane Smith",
      status: "Pending",
    },
    {
      id: 3,
      title: "Third Post",
      category: "Education",
      author: "Admin",
      status: "Rejected",
    },
  ];

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
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      post.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : post.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">
                    View
                  </Button>

                  {/* Approve / Reject Buttons */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-green-600 text-white hover:bg-green-700"
                    onClick={() => {
                      console.log("Approved post:", post.id);
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-yellow-600 text-white hover:bg-yellow-700"
                    onClick={() => {
                      console.log("Rejected post:", post.id);
                    }}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManagePost;
