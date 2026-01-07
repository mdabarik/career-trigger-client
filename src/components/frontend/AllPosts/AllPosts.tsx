"use client";

import { useEffect, useState } from "react";
import PostCard from "@/components/shared/PostCard/PostCard";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter, useSearchParams } from "next/navigation";

const AllPosts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let initialPage = Number(searchParams.get("page"));
  let initialLimit = Number(searchParams.get("limit"));
  let initialSearch = searchParams.get("search") || "";

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [searchText, setSearchText] = useState(initialSearch);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `http://localhost:3001/api/posts?status=published&page=${page}&limit=${limit}&search=${searchText}`,
        {
          cache: "no-store",
        }
      );
      const resJson = await res.json();
      if (!resJson.success) {
        setError(true);
      } else {
        console.log("resJson from page.tsx", resJson);
        setPosts(resJson?.data?.posts);
        setTotalPages(resJson?.data?.totalPages);
      }
    };

    fetchPosts();
  }, [page, limit, searchText]);

  const onChangeHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    console.log(value);
    router.push(`?page=${value}&limit=${limit}&search=${searchText}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`?page=${page}&limit=${limit}&search=${e.target.value}`);
    setSearchText(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Search submitted:", searchText);
  };

  return (
    <div className="flex flex-row justify-between items-start max-w-[1280px] mx-auto">
      <div className="w-[100%] my-7">
        <h2 className="font-bold text-xl mb-4">Latest Posts</h2>
        {/* search field */}
        <div className="flex w-[50%] pb-4 flex-wrap gap-2">
          {" "}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
            className=" flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 active:border-red-600 active:ring-red-600 "
          />{" "}
          {/* <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 w-[100%] shadow-md shadow-red-300"
          >
            {" "}
            Search Now{" "}
          </button>{" "} */}
        </div>

        {error === true ? (
          <p>Something went wrong!</p>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-6 w-full">
              {posts?.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            {totalPages > 1 ? (
              <>
                <div className="my-10 flex justify-center">
                  <Stack spacing={2}>
                    {" "}
                    <Pagination
                      count={totalPages}
                      page={page}
                      onChange={onChangeHandler}
                      sx={{
                        "& .MuiPaginationItem-root.Mui-selected": {
                          backgroundColor: "red",
                          color: "white",
                        },
                        "& .MuiPaginationItem-root:hover": {
                          backgroundColor: "#8B0000",
                          color: "white",
                        },
                      }}
                    />{" "}
                  </Stack>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
