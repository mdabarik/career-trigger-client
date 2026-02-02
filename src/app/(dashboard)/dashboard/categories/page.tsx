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
import { useCategories } from "@/features/public/categories/useCategories";
import { useDeleteCategory } from "@/features/dashboard/categories/useDeleteCategories";
import { useUpdateCategory } from "@/features/dashboard/categories/useUpdateCategories";
import Link from "next/link";

const CategoryTable = () => {
  const { data: categories, isLoading } = useCategories();
  const { mutate: deleteCategory } = useDeleteCategory();
  const { mutate: updateCategory } = useUpdateCategory();
  console.log(categories, "categories useCate");
  // const categories = [
  //   { id: 1, name: "Tech" },
  //   { id: 2, name: "Lifestyle" },
  //   { id: 3, name: "Education" },
  //   { id: 4, name: "Business" },
  // ];

  if (isLoading) return "Loading...";

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Categories: {categories?.data?.length}
        </h2>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search Category..."
            className="w-full md:w-64"
          />
          <Button className="bg-red-600 text-white hover:bg-red-700">
            Add New Category
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">SL</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.data?.map((cat, index) => (
              <TableRow key={cat._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">
                    <Link href={`/dashboard/categories/${cat?._id}`}>Edit</Link>
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
                          delete category <strong>{cat.name}</strong>.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 text-white hover:bg-red-700"
                          onClick={() => deleteCategory(cat._id)}
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

export default CategoryTable;
