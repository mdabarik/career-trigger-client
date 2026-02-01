import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    router.push("/login");
  };

  return logout;
};
