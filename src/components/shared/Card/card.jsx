// components/ProductCard.tsx
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard() {
  return (
    <Card className="bg-white text-black overflow-hidden rounded-[20px] shadow-md shadow-red-200">
      {/* Product Image */}
      <div className="relative w-full h-[200px]">
        <Image
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="Nike Jordan Air Rev"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00000090] to-transparent" />
      </div>

      {/* Body section with rounded top overlapping image */}
      <div className="relative -mt-6 bg-white rounded-t-[20px] p-4">
        <CardHeader className="px-3 py-2">
          <CardTitle className="text-lg font-bold text-gray-900">
            Nike Jordan Air Rev
          </CardTitle>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
              EU38
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
              Black & White
            </span>
          </div>

          <CardDescription className="text-xs text-gray-600 mt-2">
            Crossing hardwood comfort with off-court flair. '80s-Inspired
            construction, bold details and nothin'-but-net style.
          </CardDescription>
        </CardHeader>

        <CardFooter className="px-3 py-2">
          <Button className="w-full bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-300">
            View This Post
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
