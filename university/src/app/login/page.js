import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Login() {
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
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#5227FF] focus:border-transparent sm:text-sm transition-all" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-[#13111C]/50 border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#5227FF] focus:border-transparent sm:text-sm transition-all" placeholder="Password" />
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
