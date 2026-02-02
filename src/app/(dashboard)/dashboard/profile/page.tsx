import { getUserFromCookie } from "@/lib/auth.server";
import Image from "next/image";
import React from "react";

const ProfilePage = async () => {
  const user = await getUserFromCookie();

  return (
    <div>
      <h2 className="m-10 font-semibold">My Profile</h2>
      <div className="flex flex-col min-h-screen bg-gray-100 text-center m-10">
        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
          <Image
            alt="profile image"
            src={user?.photoUrl}
            height={200}
            width={200}
            className="rounded-full object-cover rounded-[500px]"
          />
          <h3 className="text-lg font-semibold text-gray-700">{user?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
