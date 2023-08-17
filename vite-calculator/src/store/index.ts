import { create } from "zustand";

interface CalculatorState {
  getOperand: string;
  isCheckOperator: boolean;
  setOperand: (num: string) => void;
  setIsCheckOperator: (isOperator: boolean) => void;
  setAllClear: () => void;
  setDeleteOperand: () => void;
}

export const useCalculator = create<CalculatorState>((set) => ({
  getOperand: "",
  isCheckOperator: false,
  setOperand: (num) => {
    set((state) => ({ getOperand: state.getOperand + num }));
  },
  setIsCheckOperator: (isOperator) => {
    set({
      isCheckOperator: isOperator,
    });
  },
  setAllClear: () => {
    set({ getOperand: "" });
  },
  setDeleteOperand: () => {
    set((state) => ({
      getOperand: state.getOperand.slice(0, -1),
    }));
  },
}));
