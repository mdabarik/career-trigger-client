import { useCallback } from "react";
import { tokenService } from "./utils";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    tokenService.clearAllTokens();

    router.refresh();
  }, [router]);

  return logout;
};
