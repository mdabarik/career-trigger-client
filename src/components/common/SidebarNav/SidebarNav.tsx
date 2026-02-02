"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardLogout from "@/components/common/DashboardLogout/DashboardLogout";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isActive =
    pathname === href ||
    (pathname === "/dashboard" && href === "/dashboard/statistics");

  return (
    <Link
      href={href}
      className={`hover:text-red-600 ${
        isActive ? "text-red-500" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

const SidebarNav = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-red-600">
          {user?.role === "user" && <span>Member</span>}
          {user?.role === "editor" && <span>Editor</span>}
          {user?.role === "admin" && <span>Admin</span>}
        </h2>

        <div className="mt-auto flex border-t"></div>

        <nav className="flex flex-col space-y-3">
          <NavLink href="/dashboard/statistics">Admin Statistics</NavLink>
          <NavLink href="/dashboard/my-statistics">My Statistics</NavLink>
          <NavLink href="/dashboard/my-posts">My Posts</NavLink>

          {(user?.role === "editor" || user?.role === "admin") && (
            <NavLink href="/dashboard/manage-posts">Manage Posts</NavLink>
          )}

          {user?.role === "admin" && (
            <>
              <NavLink href="/dashboard/categories">Manage Categories</NavLink>
              <NavLink href="/dashboard/users">Users</NavLink>
            </>
          )}
        </nav>

        <div className="mt-auto flex border-t pt-4">
          <nav className="flex flex-col space-y-3">
            <NavLink href="/dashboard/profile">Profile</NavLink>
            <DashboardLogout />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
