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

const UserPage = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "user",
      provider: "credentials",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "editor",
      provider: "google",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      provider: "github",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Users: {users.length}
        </h2>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search User..."
            className="w-full md:w-64"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-700"
                        : user.role === "editor"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>{user.provider}</TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => console.log("Make Editor:", user.id)}
                  >
                    Make Editor
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-red-600 text-white hover:bg-red-700"
                    onClick={() => console.log("Make Admin:", user.id)}
                  >
                    Make Admin
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

export default UserPage;
