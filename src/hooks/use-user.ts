import { useAuthStore } from '@/zustand/store-auth';
import { useUserStore } from '@/zustand/store-user';
import type { User } from 'firebase/auth';

export const useUser = () => {
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const resetUserInfo = useUserStore((state) => state.resetUserInfo);

  const setFirebaseUser = (user: User | null) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUserInfo({
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        uid: user.uid || '',
      });
      login();
      // ...
    } else {
      // User is signed out
      // ...
      resetUserInfo();
      logout();
    }
  };

  return {
    setFirebaseUser,
  };
};
