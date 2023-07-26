import { create } from 'zustand';

interface RuletteItem {
  key: number;
  text: string;
}

interface ToDoState {
  Item: RuletteItem[];
  setCreateItem: (text: string) => void;
  setRemoveItem: (key: number) => void;
}

export const useStore = create<ToDoState>((set) => ({
  Item: [],
  setCreateItem: (text) => {
    set((state) => ({
      ...state,
      Item: [...state.Item, { key: Date.now(), text }],
    }));
  },
  setRemoveItem: (key) => {
    set((state) => ({
      ...state,
      Item: state.Item.filter((todo) => todo.key !== key),
    }));
  },
}));
