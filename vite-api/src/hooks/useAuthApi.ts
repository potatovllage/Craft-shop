import axios from "axios";
import type { UserAccount, UserInfo } from "../types/User";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useUserInfoStore } from "../store";

export const useSignUpUser = () => {
  const navigate = useNavigate();

  return useMutation(
    async (param: UserAccount) =>
      await axios.post(`/user`, {
        ...param,
      }),
    {
      onError: () => {
        alert("회원가입에 실패하셨습니다.");
      },
      onSuccess: () => {
        navigate("/login");
      },
    }
  );
};

export const useLogInUser = () => {
  const navigate = useNavigate();

  return useMutation(
    async (param: UserAccount) => {
      await axios.post(`/user/login`, { ...param });
    },
    {
      onError: () => {
        alert("로그인에 실패하였습니다.");
      },
      onSuccess: () => {
        navigate("/");
      },
    }
  );
};

export const useSignOutUser = () => {
  const navigate = useNavigate();

  return useMutation(
    async () => {
      await axios.get(`/user/logout`);
    },
    {
      onError: (error) => console.log(error),
      onSuccess: () => navigate("/"),
    }
  );
};

export const useUserInfo = () => {
  const { setUserInfo } = useUserInfoStore();

  useQuery(
    ["userInfo"],
    async () => {
      const response = await axios.get<UserInfo>(`/user`);
      return response.data;
    },
    {
      onSuccess: (data) => {
        const { id, email, created_at, updated_at } = data;
        setUserInfo(id, email, created_at, updated_at);
      },
      onError: (error) => console.log(error),
    }
  );
};
