import { create } from "zustand";
import { persist } from "zustand/middleware";
type ObjectNum = {
  id: number;
  value: number | string;
  selected: boolean;
  result: boolean;
};
interface StateStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  //
  gamesPlayed: number;
  setGamesPlayed: (gamesPlayed: number) => void;
  //
  currentStreak: number;
  setCurrentStreak: (currentStreak: number) => void;
  //
  longestStreak: number;
  setLongestStreak: (longestStreak: number) => void;
  //
  fastestTime: number;
  setFastestTime: (fastestTime: number) => void;
  //
  solvedFirst: number;
  setSolvedFirst: (solvedFirst: number) => void;
  //
  solvedSecond: number;
  setSolvedSecond: (solvedSecond: number) => void;
  //
  solvedThird: number;
  setSolvedThird: (solvedThird: number) => void;
  //
  lastLife: number;
  setLastLife: (lastLife: number) => void;
  //
  lastGameDate: string;
  setLastGameDate: (lastGameDate: string) => void;
  //
  mySolution: object;
  setMySolution: (mySolution: object) => void;
  //
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;

  achievedTargetNum: boolean;
  setAchievedTargetNum: (achievedTargetNum: boolean) => void;

  isStartGame: boolean;
  setIsStartGame: (isStartGame: boolean) => void;

  isConfetti: boolean;
  setIsConfetti: (isConfetti: boolean) => void;

  startTime: object;
  setStartTime: (startTime: object) => void;

  endTime: number;
  setEndTime: (endTime: number) => void;

  answer: (string | number)[][];
  setAnswer: (answer: (string | number)[][]) => void;

  hasFailedShowSolution: boolean;
  setHasFailedShowSolution: (hasFailedShowSolution: boolean) => void;

  numberObjPersist: ObjectNum[];
  setNumberObjPersist: (numberObjPersist: ObjectNum[]) => void;

  id: number;
  setId: (Id: number) => void;
}
export const usePersistStore = create<StateStore>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
      //
      gamesPlayed: 0,
      setGamesPlayed: (gamesPlayed: number) => set({ gamesPlayed }),
      //
      currentStreak: 0,
      setCurrentStreak: (currentStreak: number) => set({ currentStreak }),
      //
      longestStreak: 0,
      setLongestStreak: (longestStreak: number) => set({ longestStreak }),
      //
      fastestTime: 0,
      setFastestTime: (fastestTime: number) => set({ fastestTime }),
      //
      solvedFirst: 0,
      setSolvedFirst: (solvedFirst: number) => set({ solvedFirst }),
      //
      solvedSecond: 0,
      setSolvedSecond: (solvedSecond: number) => set({ solvedSecond }),
      //
      solvedThird: 0,
      setSolvedThird: (solvedThird: number) => set({ solvedThird }),
      //
      lastLife: 3,
      setLastLife: (lastLife: number) => set({ lastLife }),
      //
      lastGameDate: "",
      setLastGameDate: (lastGameDate: string) => set({ lastGameDate }),
      //
      mySolution: {},
      setMySolution: (mySolution: object) => set({ mySolution }),

      isSolved: false,
      setIsSolved: (isSolved: boolean) => set({ isSolved }),
      //
      achievedTargetNum: false,
      setAchievedTargetNum: (achievedTargetNum: boolean) => set({ achievedTargetNum }),
      //
      isStartGame: false,
      setIsStartGame: (isStartGame: boolean) => set({ isStartGame }),
      //
      isConfetti: false,
      setIsConfetti: (isConfetti: boolean) => set({ isConfetti }),
      //
      startTime: {},
      setStartTime: (startTime: object) => set({ startTime }),
      //
      endTime: 0,
      setEndTime: (endTime: number) => set({ endTime }),
      //
      answer: [],
      setAnswer: (answer: (string | number)[][]) => set({ answer }),

      //
      hasFailedShowSolution: false,
      setHasFailedShowSolution: (hasFailedShowSolution: boolean) =>
        set({ hasFailedShowSolution }),

      //
      numberObjPersist: [],
      setNumberObjPersist: (numberObjPersist: ObjectNum[]) => set({ numberObjPersist }),

      //
      id: 0,
      setId: (id: number) => set({ id }),
    }),

    {
      name: "sum_digit",
    }
  )
);

interface StateIncompleteStore {
  isIncomplete: boolean;
  setIsIncomplete: (isIncomplete: boolean) => void;
  //
  objectArr: object;
  setObjectArr: (objectArr: object) => void;
  //
  currentArr: (string | number)[];
  setCurrentArr: (currentArr: (string | number)[]) => void;
  //
  completeArr: (string | number)[][];
  setCompleteArr: (completeArr: (string | number)[][]) => void;
  //
  livesIncomplete: number;
  setLivesIncomplete: (livesIncomplete: number) => void;
}
export const usePersistIncompleteStore = create<StateIncompleteStore>()(
  persist(
    (set) => ({
      isIncomplete: false,
      setIsIncomplete: (isIncomplete: boolean) => set({ isIncomplete }),
      //
      currentArr: [],
      setCurrentArr: (currentArr: (string | number)[]) => set({ currentArr }),
      //
      completeArr: [],
      setCompleteArr: (completeArr: (string | number)[][]) => set({ completeArr }),
      //
      objectArr: {},
      setObjectArr: (objectArr: object) => set({ objectArr }),
      //
      livesIncomplete: 0,
      setLivesIncomplete: (livesIncomplete: number) => set({ livesIncomplete }),
    }),
    {
      name: "incomplete",
    }
  )
);
