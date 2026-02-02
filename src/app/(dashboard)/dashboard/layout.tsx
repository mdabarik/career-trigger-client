import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getUserFromCookie } from "@/lib/auth.server";
import DashboardLogout from "@/components/common/DashboardLogout/DashboardLogout";
import SidebarNav from "@/components/common/SidebarNav/SidebarNav";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserFromCookie();


  return (
    <div className="flex min-h-screen bg-gray-100 w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white shadow-lg">
        {/* <SidebarContent /> */}
        <SidebarNav user={user} />
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
          {/* <SidebarContent /> */}
          <SidebarNav user={user} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
