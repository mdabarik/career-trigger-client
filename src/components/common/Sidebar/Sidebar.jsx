"use client";

import Categories from "@/components/categories/Categories";
import SearchBox from "@/components/common/SearchBox/SearchBox";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[100%] h-full gap-6">
      {/* 🔎 Search Section */}
      <SearchBox />

      {/* 📂 Categories Section */}
      <div className="bg-gray-50 border-2 border-red-200 rounded-[15px] p-4 shadow-sm">
        <h2 className="font-semibold text-lg mb-3">All Categories</h2>
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;
