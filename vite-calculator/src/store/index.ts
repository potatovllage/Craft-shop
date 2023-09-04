import { create } from "zustand";

interface CalculatorState {
  expression: string;
  oprationCheck: boolean;
  expressionCheck: boolean;
  appendToExpression: (inputChar: string) => void;
  setOprationCheck: (check: boolean) => void;
  setExpressionCheck: (check: boolean) => void;
  clearAll: () => void;
  deleteLostCharacter: () => void;
}

export const useCalculator = create<CalculatorState>((set) => ({
  expression: "",
  oprationCheck: true,
  expressionCheck: true,
  appendToExpression: (inputChar) => {
    set((state) => ({ expression: state.expression + inputChar }));
  },
  setOprationCheck: (check) => {
    set({ oprationCheck: check });
  },
  setExpressionCheck: (check) => {
    set({ expressionCheck: check });
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
