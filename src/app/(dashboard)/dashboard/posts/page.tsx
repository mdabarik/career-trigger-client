import React from "react";

const PostPageDashboard = async () => {
  const res = await fetch("http://localhost:3001/api/posts", {
    cache: "no-store",
  });
  const data = await res.json();

  return <div>PostPageDashboard</div>;
};

export default PostPageDashboard;
