import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <p>Something went wrong</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
