import axios from "axios";
import { UserAccount, UserInfo } from "../types/User";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useUserInfoStore } from "../store";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const useSignUpUser = () => {
  const navigate = useNavigate();

  return useMutation(
    async (param: UserAccount) =>
      await axios.post(`${BASE_URL}/api/user`, {
        ...param,
      }),
    {
      onError: (error) => {
        console.log(error);
        alert("회원가입에 실패하셨습니다.");
      },
      onSuccess: () => {
        alert("회원가입에 성공하셨습니다.");
        navigate("/");
      },
    }
  );
};

export const useLogInUser = () => {
  const navigate = useNavigate();

  return useMutation(
    async (param: UserAccount) => {
      await axios.post(
        `${BASE_URL}/api/user/login`,
        { ...param },
        {
          withCredentials: true,
        }
      );
    },
    {
      onError: (error) => {
        console.log(error);
        alert("로그인에 실패하였습니다.");
      },
      onSuccess: () => {
        alert("로그인에 성공하셨습니다.");
        navigate("/main");
      },
    }
  );
};

export const useSignOutUser = () => {
  const navigate = useNavigate();

  return useMutation(
    async () => {
      await axios.get(`${BASE_URL}/api/user/logout`, {
        withCredentials: true,
      });
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
      const response = await axios.get<UserInfo>(`${BASE_URL}/api/user`, {
        withCredentials: true,
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("!");
        const { id, email, created_at, updated_at } = data;
        setUserInfo(id, email, created_at, updated_at);
      },
      onError: (error) => console.log(error),
    }
  );
};
