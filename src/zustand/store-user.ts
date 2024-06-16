import { create } from 'zustand';

type Actions = {
  userInfo: APP.USER.INFO | null;
  setUserInfo: (userInfo: APP.USER.INFO | null) => void;
  resetUserInfo: () => void;
};

const initialState = {
  userInfo: null as APP.USER.INFO | null,
};

export const useUserStore = create<typeof initialState & Actions>((set) => ({
  ...initialState,
  setUserInfo: (userInfo) => set({ userInfo }),
  resetUserInfo: () => set({ userInfo: null }),
}));
