import { ThemeProvider } from '@/components/theme-provider';
import Dashboard from '@/components/dash-board';
import LoginForm from './components/authentication-02';

const Layout = () => {
  return (
    <div className="w-screen h-screen flex-1">
      <LoginForm />
      <Dashboard />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  );
}

export default App;
