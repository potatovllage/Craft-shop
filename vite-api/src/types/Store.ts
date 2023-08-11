export interface InputState {
  inputs: Record<string, string>;
  setInput: (name: string, value: string) => void;
}

export interface UserInfoState {
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

export interface ToggleFilterState {
  toggleFilter: boolean;
  selectToggleFilter: () => void;
}
