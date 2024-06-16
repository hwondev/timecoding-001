import type { User } from 'firebase/auth';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

export const onFirebaseAuthStateChanged = (cb: (user: User | null) => void) => {
  const auth = getAuth();
  onAuthStateChanged(auth, cb);
};

export const doSignInWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
};

export const doSignOut = () => {
  const auth = getAuth();
  auth.signOut();
};
