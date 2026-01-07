import { Spinner } from "@/components/ui/spinner";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Spinner className="w-10 h-10 text-red-500" />{" "}
    </div>
  );
};

export default Loader;
