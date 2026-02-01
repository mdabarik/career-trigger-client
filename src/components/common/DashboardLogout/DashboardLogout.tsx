"use client";
import { Button } from "@/components/ui/button";
import { tokenService } from "@/features/auth/utils";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    tokenService.clearAllTokens();
    router.push("/login");
    // console.log("handle logout");
  };
  return (
    <Button onClick={handleLogout} className="bg-red-600">
      Logout
    </Button>
  );
};

export default DashboardLogout;
