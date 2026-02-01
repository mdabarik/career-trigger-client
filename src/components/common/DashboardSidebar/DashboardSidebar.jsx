const { Button } = require("@/components/ui/button");
const { default: Link } = require("next/link");

<div className="flex flex-col h-full p-6">
  {/* Top Section */}
  <div className="flex flex-col space-y-4">
    <h2 className="text-2xl font-bold text-red-600">Admin</h2>
    <div className="mt-auto flex border-t"></div>
    <nav className="flex flex-col space-y-3 text-gray-700">
      <Link href={"#"} className="hover:text-red-600">
        Statistics
      </Link>
      <Link href={"#"} className="hover:text-red-600">
        Manage Posts
      </Link>
      <Link href={"#"} className="hover:text-red-600">
        Manage Posts
      </Link>
      <Link href={"#"} className="hover:text-red-600">
        Categories
      </Link>
      <Link href={"#"} className="hover:text-red-600">
        All Users
      </Link>
    </nav>
    <div className="mt-auto flex border-t pt-4">
      <nav className="flex flex-col space-y-3 text-gray-700">
        <Link href={"#"} className="hover:text-red-600">
          Profile
        </Link>
        <Button className="bg-red-800">Logout</Button>
      </nav>
    </div>
  </div>
</div>;
