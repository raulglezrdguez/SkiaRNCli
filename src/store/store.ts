import {create} from 'zustand';

interface SkiaState {
  component: string;
  setComponent: (component: string) => void;
}
export const useSkiaStore = create<SkiaState>(set => ({
  component: '',
  setComponent: (newComponent: string) => set({component: newComponent}),
}));
