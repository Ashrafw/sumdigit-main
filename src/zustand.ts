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

  // achievedTargetNum: boolean;
  // setAchievedTargetNum: (achievedTargetNum: boolean) => void;

  targetNumber: number;
  setTargetNumber: (targetNumber: number) => void;

  startTime: object;
  setStartTime: (startTime: object) => void;

  endTime: number;
  setEndTime: (targetNumber: number) => void;
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
  // achievedTargetNum: false,
  // setAchievedTargetNum: (achievedTargetNum: boolean) => set({ achievedTargetNum }),
  //
  targetNumber: 346,
  setTargetNumber: (targetNumber: number) => set({ targetNumber }),
  //
  startTime: {},
  setStartTime: (startTime: object) => set({ startTime }),
  //
  endTime: 0,
  setEndTime: (endTime: number) => set({ endTime }),
  //
}));
