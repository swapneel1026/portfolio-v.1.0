import { create } from "zustand";

interface GlobalState {
  selected: string;
  setselected: (value: string) => void;
}

export const useLinkSelectedStore = create<GlobalState>((set) => ({
  selected: "main",
  setselected: (value) => set({ selected: value }),
}));
