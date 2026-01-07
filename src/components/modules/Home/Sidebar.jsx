"use client";

import SearchBox from "@/components/frontend/shared/SearchBox/SearchBox";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[100%] h-full gap-6">
      {/* 🔎 Search Section */}
      <SearchBox />

      {/* 📂 Categories Section */}
      <div className="bg-gray-50 border-2 border-red-200 rounded-[15px] p-4 shadow-sm">
        <h2 className="font-semibold text-lg mb-3">All Categories</h2>
        <div className="flex flex-row flex-wrap gap-2">
          <button className="px-3 py-2 text-sm text-gray-700 border border-red-200 rounded-md hover:bg-red-50 hover:text-red-600 transition">
            Category (10)
          </button>
          <button className="px-3 py-2 text-sm text-gray-700 border border-red-200 rounded-md hover:bg-red-50 hover:text-red-600 transition">
            Category 2
          </button>
          <button className="px-3 py-2 text-sm text-gray-700 border border-red-200 rounded-md hover:bg-red-50 hover:text-red-600 transition">
            Category 3
          </button>
          <button className="px-3 py-2 text-sm text-gray-700 border border-red-200 rounded-md hover:bg-red-50 hover:text-red-600 transition">
            Category 4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
