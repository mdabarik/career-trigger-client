"use client";

import { authOptions } from "@/helper/authOptions";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

const PostPageDashboard = () => {
  // const res = await fetch("http://localhost:3001/api/posts", {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  const session = useSession();

  console.log("from page.tsx dashbaord,", session);

  return <div>PostPageDashboard</div>;
};

export default PostPageDashboard;
