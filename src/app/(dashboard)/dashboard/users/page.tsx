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
import { useUser } from "@/features/auth/useUser";
import { useAllUsers } from "@/features/dashboard/users/useAllUsers";
import { useUpdateUserRole } from "@/features/dashboard/users/useUpdateUserRole";

const UserPage = () => {
  const { data: users, isLoading } = useAllUsers();
  const userData: any = useUser();

  const { mutate: updateRole, isPending } = useUpdateUserRole();

  if (isLoading) return "Loading...";

  return (
    <div className="p-6 space-y-6">
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
            {users.map((user: any, index: number) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
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

                {user?._id == userData?.id ? null : (
                  <TableCell className="flex gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateRole({ id: user._id, role: "user" })}
                      disabled={isPending}
                    >
                      Make User
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        updateRole({ id: user._id, role: "editor" })
                      }
                      disabled={isPending}
                    >
                      Make Editor
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-red-600 text-white hover:bg-red-700"
                      onClick={() =>
                        updateRole({ id: user._id, role: "admin" })
                      }
                      disabled={isPending}
                    >
                      Make Admin
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserPage;
