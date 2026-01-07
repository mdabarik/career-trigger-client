import Loader from "@/components/shared/Loader/Loader";
import { Spinner } from "@/components/ui/spinner";

const SpinnerColor = () => {
  return (
    <div className="flex justify-center items-center h-screen text-black text-2xl font-bold">
      <Loader />
    </div>
  );
};

export default SpinnerColor;
