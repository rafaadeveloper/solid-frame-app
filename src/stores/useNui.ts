import { createWithSignal } from "solid-zustand";

type Data = {};

export interface NuiFrame {
  current: Data;
  set: (current: Data) => void;
}

export const useNui = createWithSignal<NuiFrame>((set: any) => ({
  current: {},
  set: (current: Data) => set({ current }),
}));
