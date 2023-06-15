import {create} from 'zustand';

interface SkiaState {
  components: string[];
  addComponent: (component: string) => void;
  removeComponent: (component: string) => void;
}
export const useSkiaStore = create<SkiaState>(set => ({
  components: [],
  addComponent: (newComponent: string) =>
    set(state => {
      console.log(state);
      return {
        components: [...state.components, newComponent],
      };
    }),
  removeComponent: (component: string) =>
    set(state => {
      const comps = state.components.filter(c => c !== component);
      return {components: comps};
    }),
}));
