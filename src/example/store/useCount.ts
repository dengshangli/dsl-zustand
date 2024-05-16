import { create } from './../../packages';

export interface CountState {
  count: number;
  setCount: (count: number) => void;
}

const useCount = create<CountState>((set) => ({
  count: 0,
  setCount: (count: number) => set({ count }),
}));

export default useCount;
