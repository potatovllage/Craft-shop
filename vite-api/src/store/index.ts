import { create } from "zustand";
import type {
  InputState,
  ToggleFilterState,
  UserInfoState,
} from "../types/Store";

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

export const useFilterStore = create<ToggleFilterState>((set) => ({
  toggleFilter: false,
  selectToggleFilter: () => {
    set((state) => ({
      ...state,
      toggleFilter: !state.toggleFilter,
    }));
  },
}));
