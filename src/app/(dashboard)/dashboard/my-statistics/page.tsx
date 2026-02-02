"use client";

import { useUser } from "@/features/auth/useUser";
import { useCatStats } from "@/features/dashboard/useCatStats";
import { useStats } from "@/features/dashboard/useStats";
import { useUserStats } from "@/features/dashboard/useUserStats";
import privateClientAPI from "@/lib/api/privateClientAPI.client";
import React from "react";
import {
  FaFileAlt,
  FaClock,
  FaTimesCircle,
  FaCheckCircle,
  FaUsers,
  FaList,
} from "react-icons/fa";

const MyStatistics = () => {
  const user = useUser();
  const { data: stats, isLoading, isError } = useStats(user?.id);

  // console.log(user?.id, "user user user");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading stats</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full0">
        {/* Card 1: Total Posts */}
        <div className="flex flex-col items-center justify-center bg-blue-500 text-white rounded-lg shadow-md p-6">
          <FaFileAlt size={40} />
          <h3 className="text-lg font-semibold mt-2">Total Posts</h3>
          <p className="text-2xl font-bold">{stats?.total}</p>
        </div>

        {/* Card 2: Pending Posts */}
        <div className="flex flex-col items-center justify-center bg-yellow-500 text-white rounded-lg shadow-md p-6">
          <FaClock size={40} />
          <h3 className="text-lg font-semibold mt-2">Pending Posts</h3>
          <p className="text-2xl font-bold">{stats?.pending}</p>
        </div>

        {/* Card 3: Rejected Posts */}
        <div className="flex flex-col items-center justify-center bg-red-500 text-white rounded-lg shadow-md p-6">
          <FaTimesCircle size={40} />
          <h3 className="text-lg font-semibold mt-2">Rejected Posts</h3>
          <p className="text-2xl font-bold">{stats?.declined}</p>
        </div>

        {/* Card 4: Approved Posts */}
        <div className="flex flex-col items-center justify-center bg-green-500 text-white rounded-lg shadow-md p-6">
          <FaCheckCircle size={40} />
          <h3 className="text-lg font-semibold mt-2">Approved Posts</h3>
          <p className="text-2xl font-bold">{stats?.published}</p>
        </div>
      </div>
    </div>
  );
};

export default MyStatistics;
