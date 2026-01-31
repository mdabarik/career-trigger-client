"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-red-600">Login</h2>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-red-600">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-red-400 focus:border-red-600 focus:ring-red-600"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-red-600">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="border-red-400 focus:border-red-600 focus:ring-red-600"
          />
        </div>

        {/* Login Button */}
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          Login
        </Button>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2">
          <div className="h-px w-16 bg-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <div className="h-px w-16 bg-gray-300" />
        </div>

        {/* Google Button */}
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 border-red-400 text-red-600 hover:bg-red-50"
        >
          <Image
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google"
            width={20}
            height={20}
          />
          Sign In with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-red-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

/*


import React, { useState } from "react";
import { useLogin } from "@/features/auth/useLogin";

const LoginForm = () => {
  const login = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={login.isPending}>
        {login.isPending ? "Logging in..." : "Login"}
      </button>

      {login.isSuccess && <p>Login successful!</p>}
      {login.isError && <p> Login failed: {(login.error as any).message}</p>}
    </form>
  );
};

export default LoginForm;

*/
