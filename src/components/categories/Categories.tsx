import { useCategories } from "@/features/public/categories/useCategories";
import { getCategoriesServer } from "@/lib/categoriesServer";
import Link from "next/link";

const Categories = () => {
  const { data, isLoading } = useCategories();

  if (isLoading) return "Loading...";

  const categories = data?.data;

  return (
    <>
      <div className="flex flex-row flex-wrap gap-2">
        {categories?.map((category) => {
          return (
            <Link
              key={category?._id}
              href={`/category/${category?._id}/posts`}
              className="px-3 py-2 text-sm text-gray-700 border border-red-200 rounded-md hover:bg-red-50 hover:text-red-600 transition"
            >
              {category?.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
