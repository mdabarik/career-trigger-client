import { Button } from "@/components/ui/button";
import React from "react";

import Navbar from "../../../components/shared/Navbar/navbar";

const AboutPage = async () => {
  const res = await fetch("http://localhost:3001/api/posts", {
    cache: "no-store",
  });

  console.log(process.env.AUTH_SECRET);
  const data = await res.json();
  return (
    <div>
      <p>About Page</p>
    </div>
  );
};

export default AboutPage;
