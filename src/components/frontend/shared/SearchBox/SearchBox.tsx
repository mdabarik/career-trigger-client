import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    if (searchText.trim() == "") {
      setError("Please enter search text!");
    } else {
      router.push(
        `/posts?limit=10&page=1&search=${encodeURIComponent(searchText)}`
      );
    }
  };
  return (
    <div className="bg-gray-50 border-2 border-red-200 rounded-[15px] p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-3">Search</h2>
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="
              flex-1 px-3 py-2 
              border border-gray-300 rounded-md 
              focus:outline-none 
              focus:ring-2 focus:ring-red-500 
              focus:border-red-500 
              active:border-red-600 active:ring-red-600
            "
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 w-[100%] shadow-md shadow-red-300"
        >
          Search Now
        </button>
        {error && <p className="text-red-400 text-center w-full">{error}</p>}
      </div>
    </div>
  );
};

export default SearchBox;
