import {create} from 'zustand';

type ExampleStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useExampleStore = create<ExampleStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useExampleStore;