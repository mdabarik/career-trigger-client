import { authOptions } from "@/helper/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const PostPageDashboard = async () => {
  // const res = await fetch("http://localhost:3001/api/posts", {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  const session = await getServerSession(authOptions);

  console.log("from page.tsx dashbaord,", session);

  return <div>PostPageDashboard</div>;
};

export default PostPageDashboard;
