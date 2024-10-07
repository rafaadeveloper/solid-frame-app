import { createWithSignal } from "solid-zustand";

type Data = boolean;

export interface NuiFrame {
  current: Data;
  set: (current: Data) => void;
}

export const useVisibility = createWithSignal<NuiFrame>((set: any) => ({
  current: false,
  set: (current: Data) => set({ current }),
}));
