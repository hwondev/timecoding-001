import { create } from 'zustand';

type Actions = {
  setHasAuth: (hasAuth: boolean) => void;
  login: () => void;
  logout: () => void;
};

const initialState = {
  hasAuth: false,
};

export const useAuthStore = create<typeof initialState & Actions>((set) => ({
  ...initialState,
  setHasAuth: (hasAuth) => set({ hasAuth }),
  login: () => set({ hasAuth: true }),
  logout: () => set({ hasAuth: false }),
}));
