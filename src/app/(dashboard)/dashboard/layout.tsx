import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getUserFromCookie } from "@/lib/auth.server";
import DashboardLogout from "@/components/common/DashboardLogout/DashboardLogout";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserFromCookie();

  // console.log(user, "user");

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-red-600">
          {user?.role == "user" ? <span>Member</span> : <></>}
          {user?.role == "editor" ? <span>Editor</span> : <></>}
          {user?.role == "admin" ? <span>Admin</span> : <></>}
        </h2>
        <div className="mt-auto flex border-t"></div>
        <nav className="flex flex-col space-y-3 text-gray-700">
          <Link href={"/dashboard/statistics"} className="hover:text-red-600">
            Statistics
          </Link>
          <Link href={"/dashboard/posts"} className="hover:text-red-600">
            Manage Posts
          </Link>
          <Link href={"/dashboard/categories"} className="hover:text-red-600">
            Categories
          </Link>
          <Link href={"/dashboard/users"} className="hover:text-red-600">
            Users
          </Link>
        </nav>
        <div className="mt-auto flex border-t pt-4">
          <nav className="flex flex-col space-y-3 text-gray-700">
            <Link href={"/dashboard/profile"} className="hover:text-red-600">
              Profile
            </Link>
            <DashboardLogout />
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white shadow-lg">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="md:hidden m-4 border-red-400 text-red-600"
          >
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
