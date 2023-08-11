import create from "zustand";

interface InputState {
  inputs: Record<string, string>;
  setInput: (name: string, value: string) => void;
}

interface UserInfoState {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  setUserInfo: (
    id: number,
    email: string,
    created_at: string,
    updated_at: string
  ) => void;
}

export const useInputStore = create<InputState>((set) => ({
  inputs: {
    email: "",
    password: "",
  },
  setInput: (name, value) =>
    set((state) => ({ inputs: { ...state.inputs, [name]: value } })),
}));

export const useUserInfoStore = create<UserInfoState>((set) => ({
  created_at: "",
  email: "",
  id: 0,
  updated_at: "",
  setUserInfo: (id, email, created_at, updated_at) =>
    set({
      id,
      email,
      created_at,
      updated_at,
    }),
}));
