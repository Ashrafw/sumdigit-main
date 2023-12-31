import { create } from "zustand";

interface StateStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;

  isHowToPlayModal: boolean;
  setIsHowToPlayModal: (isHowToPlayModal: boolean) => void;

  isStatsModal: boolean;
  setIsStatsModal: (isStatsModal: boolean) => void;

  lives: number;
  setLives: (lives: number) => void;

  targetNumber: any;
  setTargetNumber: (targetNumber: any) => void;
}

export const useStateStore = create<StateStore>()((set) => ({
  isDarkMode: true,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
  //
  isHowToPlayModal: false,
  setIsHowToPlayModal: (isHowToPlayModal: boolean) => set({ isHowToPlayModal }),
  //
  isStatsModal: false,
  setIsStatsModal: (isStatsModal: boolean) => set({ isStatsModal }),
  //
  lives: 3,
  setLives: (lives: number) => set({ lives }),
  //
  targetNumber: 0,
  setTargetNumber: (targetNumber: any) => set({ targetNumber }),
}));
