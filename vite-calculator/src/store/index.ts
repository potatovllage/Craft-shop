import { create } from "zustand";

interface CalculatorState {
  expression: string;
  appendToExpression: (inputChar: string) => void;
  clearAll: () => void;
  deleteLostCharacter: () => void;
}

export const useCalculator = create<CalculatorState>((set) => ({
  expression: "",
  appendToExpression: (inputChar) => {
    set((state) => ({ expression: state.expression + inputChar }));
  },
  clearAll: () => {
    set({ expression: "" });
  },
  deleteLostCharacter: () => {
    set((state) => ({
      expression: state.expression.slice(0, -1),
    }));
  },
}));
