'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#13111C] text-slate-50 selection:bg-[#5227FF] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Or{' '}
              <Link href="/signup" className="font-medium text-[#5227FF] hover:text-[#A991FF] transition-colors">
                start your 14-day free trial
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center py-3 px-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all hover:scale-[1.02]"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#13111C] text-gray-400">Or continue with email</span>
              </div>
            </div>
          </div>

          <form className="mt-4 space-y-6" onSubmit={handleEmailSignIn}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#5227FF] focus:border-transparent sm:text-sm transition-all"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#5227FF] focus:border-transparent sm:text-sm transition-all"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#5227FF] focus:ring-[#5227FF] border-gray-300 rounded bg-[#13111C]/50" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#5227FF] hover:text-[#A991FF] transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#5227FF] hover:bg-[#6842FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5227FF] transition-all hover:scale-[1.02]">
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
             <p className="text-gray-400 text-sm mb-4">Haven't applied yet?</p>
             <Link href="/apply" className="inline-block w-full py-3 px-4 border border-[#5227FF]/50 text-sm font-medium rounded-lg text-white hover:bg-[#5227FF]/10 transition-all">
                Apply Now
             </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

