import { create } from 'zustand';

interface BtnState {
  state: boolean;
  setBtnState: () => void;
}

export const useBtnStore = create<BtnState>((set) => ({
  state: true,
  setBtnState: () => {
    set(() => ({
      state: false,
    }));
  },
}));
