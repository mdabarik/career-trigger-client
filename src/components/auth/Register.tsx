"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegister } from "@/features/auth/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SignUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof SignUpSchema>;

export default function SignUpForm() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callback = searchParams.get("callbackUrl") || "/";

  const register = useRegister();
  const router = useRouter();

  const onSubmit = (values: SignUpFormValues) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    // console.log("Form submitted:", values);
    register.mutate(payload, {
      onSuccess: () => router.push(callback),
      onError: (err) => {
        console.log(err, "err register");
        setError("Something went wrong!");
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <h2 className="text-3xl font-bold text-center text-red-600">
              Register
            </h2>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-red-600">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-red-600">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-red-600">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-red-600">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white"
            >
              Register Now
            </Button>

            {error ? (
              <p className="text-center text-sm text-red-600 mt-2">
                Something went wrong
              </p>
            ) : (
              <></>
            )}

            <div className="flex items-center justify-center space-x-2">
              <div className="h-px w-16 bg-gray-300" />
              <span className="text-sm text-gray-500">or continue with</span>
              <div className="h-px w-16 bg-gray-300" />
            </div>
          </form>
        </Form>

        <div className="flex flex-col gap-3 mt-4">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-red-400 text-red-600 hover:bg-red-50"
            onClick={() => console.log("Login with Google")}
          >
            <Image
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            Sign Up with Google
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-red-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
