import { Spinner } from "@/components/ui/spinner";

const SpinnerColor = () => {
  console.log("spinner executed from posts/loading.tsx");
  const call = () => {
    console.log("function called from return");
    return "text";
  };
  return (
    <div className="flex justify-center items-center h-screen text-black text-2xl font-bold">
      loading...
      {call()}
    </div>
  );
};

export default SpinnerColor;
