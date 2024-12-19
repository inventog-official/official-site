import { create } from 'zustand';

interface CounterState {
  hover: boolean;
  link: boolean;
  active: boolean; 
  crossTextAnimation:boolean;
  pageAnimationComplete: boolean;
  setActive: () => void;
  setHovered: (value: boolean) => void;
  setLinkHovered: (value: boolean) => void;
  setPageAnimationComplete: () => void; 
  setCrossTextAnimation: (value:boolean) => void; 
  deActive: () => void; 
  reset: () => void;    
}

// Create the store
const useCounterStore = create<CounterState>((set) => ({
  active: false, 
  link:false,
  pageAnimationComplete: false,
  hover: false,
  crossTextAnimation:false,
  setCrossTextAnimation: (value:boolean) => set(() => ({ crossTextAnimation: value })), 
  setActive: () => set(() => ({ active: true })), 
  setHovered: (value: boolean) => set(() => ({ hover: value })), 
  setLinkHovered: (value: boolean) => set(() => ({ link: value })), 
  setPageAnimationComplete: () => set(() => ({ pageAnimationComplete: true })), 
  deActive: () => set(() => ({ active: false })), 
  reset: () => set(() => ({ active: false, hover: false, pageAnimationComplete: false })), 
}));

export default useCounterStore;