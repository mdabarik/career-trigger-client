"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useLogin } from "@/features/auth/hooks";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callback = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push(callback);
        },
        onError: () => {},
      },
    );
  };

  useEffect(() => {
    if (login.isSuccess) {
      router.push(callback);
    }
  }, [login.isSuccess, router, callback]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-red-600">Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-red-600">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-red-600">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600"
            disabled={login.isPending}
          >
            {login.isPending ? "Logging in..." : "Login"}
          </Button>
        </form>

        {login.isError && (
          <p className="text-center text-sm text-red-600 mt-2">
            {(login.error as any)?.response?.data?.message ||
              (login.error as any)?.message ||
              "Something went wrong"}
          </p>
        )}
      </div>
    </div>
  );
}
