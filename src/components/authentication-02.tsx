import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { doSignInWithGoogle } from '@/lib/firebase/auth';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/zustand/store-auth';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function LoginForm() {
  const [isProccesing, setIsProccesing] = useState(false);

  const hasAuth = useAuthStore((state) => state.hasAuth);
  // const login = useAuthStore((state) => state.login);

  const handleSignInWithGoogle = async () => {
    try {
      setIsProccesing(true);
      await doSignInWithGoogle();
    } catch (error) {
      console.log(error);
    } finally {
      setIsProccesing(false);
    }
  };

  return (
    <div className={cn('p-4 md:pt-4', hasAuth && 'hidden')}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleSignInWithGoogle}
              disabled={isProccesing}
            >
              {isProccesing && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <a href="#" className="underline">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
