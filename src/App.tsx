import { ThemeProvider } from '@/components/theme-provider';
import Dashboard from '@/components/dash-board';
import LoginForm from './components/authentication-02';
import { useLayoutEffect, useState } from 'react';
import { initFirebase } from './lib/firebase/config';
import { onFirebaseAuthStateChanged } from './lib/firebase/auth';
import { useUser } from './hooks/use-user';

const DetectUser = () => {
  const [isInitFirebaseAuth, setIsInitFirebaseAuth] = useState(false);
  const { setFirebaseUser } = useUser();

  useLayoutEffect(() => {
    if (isInitFirebaseAuth) return;
    onFirebaseAuthStateChanged(setFirebaseUser);
    setIsInitFirebaseAuth(true);
  }, [isInitFirebaseAuth]);

  return null;
};

const Layout = () => {
  return (
    <>
      <DetectUser />
      <div className="w-screen h-screen flex-1">
        <LoginForm />
        <Dashboard />
      </div>
    </>
  );
};

function App() {
  const [isInitFirebase, setIsInitFirebase] = useState(false);

  useLayoutEffect(() => {
    if (isInitFirebase) return;
    initFirebase();
    setIsInitFirebase(true);
  }, [isInitFirebase]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {isInitFirebase && <Layout />}
    </ThemeProvider>
  );
}

export default App;
