import { useMutation } from "@tanstack/react-query";
import { tokenService } from "./utils";
import { loginApi, registerApi } from "./authAPI";

export const useLogin = () =>
  useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      tokenService.setAccessToken(res.data.accessToken);
      tokenService.setRefreshToken(res.data.refreshToken);
    },
  });

export const useRegister = () =>
  useMutation({
    mutationFn: registerApi,
  });
