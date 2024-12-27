'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticateWithCredentials } from '@/app/lib/actions';
import { systemDefault } from '../lib/theme';
import { authenticateWithOAuth } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const GitHubSignIn = authenticateWithOAuth.bind(null, 'github');

function GoogleSignIn() {
  toast.error(
    <>
      This login option <b>does not</b> work due to <b>Google&apos;s privacy protection rules</b>. <br />
      <br />
      As this is a <b>test project</b>, I cannot provide all the necessary <b>bureaucracy</b>.
    </>
  , {
    autoClose: 15000
  });
}

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticateWithCredentials, undefined);
  const searchParams = useSearchParams();
  const params = {
    accountCreated: searchParams.get('account-created'),
    passwordUpdated: searchParams.get('password-updated') 
  };

  useEffect(() => {
    if (params.accountCreated) {
      toast.success("Account created successfully!!");
    }
    if (params.passwordUpdated) {
      toast.success("Password updated successfully!!");
    }
    if (!params.accountCreated && !params.passwordUpdated) {
      toast.warning(<><b>Note</b>: accounts are now automatically <b>deleted</b> after <b>one week</b>.</>);
    } 
  }, [params.accountCreated, params.passwordUpdated]);

  return (
    <div className="w-full space-y-4">
      <ToastContainer theme="colored" />
      
      <form action={dispatch} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-blue-100 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-blue-300/20 rounded-lg 
                          text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 
                          focus:ring-blue-400/50 transition-all"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-blue-100 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-blue-300/20 rounded-lg 
                          text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 
                          focus:ring-blue-400/50 transition-all"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <div className="space-y-3">
          <LoginButton />
          <CreateAccount />
          <ForgotPassword />
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-blue-200/20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-blue-100 bg-transparent">or continue with</span>
        </div>
      </div>

      <div className="space-y-3">
        {/* <GitHubSignInButton /> */}
        <GoogleSignInButton />
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-lg 
                 transition-colors flex items-center justify-center space-x-2"
      aria-disabled={pending}
    >
      <span>Log in</span>
      <ArrowRightIcon className="h-5 w-5" />
    </Button>
  );
}

function CreateAccount() {
  const { pending } = useFormStatus();
  const { replace } = useRouter();
  return (
    <Button 
      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg 
                 transition-colors flex items-center justify-center space-x-2"
      aria-disabled={pending} 
      onClick={() => replace('/create-account')}
    >
      <span>Create Account</span>
      <ArrowRightIcon className="h-5 w-5" />
    </Button>
  );
}

function ForgotPassword() {
  const { pending } = useFormStatus();
  const { replace } = useRouter();
  return (
    <Button 
      className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-lg 
                 transition-colors flex items-center justify-center space-x-2"
      aria-disabled={pending} 
      onClick={() => replace('/forgot')}
    >
      <span>Forgot password?</span>
      <ArrowRightIcon className="h-5 w-5" />
    </Button>
  );
}

// function GitHubSignInButton() {
//   return (
//     <form action={GitHubSignIn}>
//       <button 
//         className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg
//                    transition-colors flex items-center justify-center space-x-3"
//         type='submit'
//       >
//         <Image
//           src='oauth-logos/github.svg'
//           width={20}
//           height={20}
//           alt='GitHub logo'
//           className="filter invert"
//         />
//         <span>Sign in with GitHub</span>
//         <ArrowRightIcon className="h-5 w-5" />
//       </button>
//     </form>
//   );
// }

function GoogleSignInButton() {
  return (
    <form action={GoogleSignIn}>
      <button 
        className="w-full bg-white hover:bg-gray-50 text-gray-900 py-2 px-4 rounded-lg
                   transition-colors flex items-center justify-center space-x-3"
        type='submit'
      >
        <Image
          src='oauth-logos/google.svg'
          width={20}
          height={20}
          alt='Google logo'
        />
        <span>Sign in with Google</span>
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </form>
  );
}