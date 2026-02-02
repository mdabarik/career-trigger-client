"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

import { useSearchCategories } from "@/features/dashboard/categories/useSearchCategories";
import { useDeleteCategory } from "@/features/dashboard/categories/useDeleteCategories";

const CategoryTablePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = searchParams?.get("search") ?? "";
  const [search, setSearch] = useState(initial);

  useEffect(() => {
    const url =
      search && search.trim()
        ? `/dashboard/categories?search=${encodeURIComponent(search)}`
        : `/dashboard/categories`;
    router.replace(url);
  }, [search, router]);

  const {
    data: categoriesResp,
    isLoading,
    isError,
  } = useSearchCategories(search);
  const { mutate: deleteCategory } = useDeleteCategory();

  const categories = categoriesResp?.data ?? [];

  // if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load categories</p>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Categories: {categories.length}
        </h2>

        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search Category..."
            className="w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="bg-red-600 text-white hover:bg-red-700">
            <Link href={"/dashboard/categories/add-new-cat"}>
              Add New Category
            </Link>
          </Button>
        </div>
      </div>

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
            {categories.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-6">
                  No categories found
                </TableCell>
              </TableRow>
            )}

            {categories.map((cat: any, index: number) => (
              <TableRow key={cat._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">
                    <Link href={`/dashboard/categories/${cat._id}`}>Edit</Link>
                  </Button>

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

export default CategoryTablePage;
