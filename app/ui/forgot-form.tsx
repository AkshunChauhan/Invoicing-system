'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { forgotPassword } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPasswordForm() {
  const [errorMessage, dispatch] = useFormState(forgotPassword, undefined);

  return (
    <div className="w-full space-y-6 px-6 py-8 bg-white/10 border border-blue-300/20 rounded-lg">
      <ToastContainer theme="colored" />
      <h1
        className={`${lusitana.className} mb-3 text-2xl font-bold text-blue-100`}
      >
        Reset Your Password
      </h1>
      <p className="text-sm text-blue-200">
        Please provide your email address for password reset.
      </p>
      <form action={dispatch} className="space-y-4">
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

        {errorMessage && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <ResetPassword />
      </form>

      <GoBack />
    </div>
  );
}

function ResetPassword() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-lg 
                 transition-colors flex items-center justify-center space-x-2"
      aria-disabled={pending}
    >
      <span>Reset Password</span>
      <ArrowRightIcon className="h-5 w-5" />
    </Button>
  );
}

function GoBack() {
  const { pending } = useFormStatus();
  const { replace } = useRouter();

  return (
    <Button
      className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-lg 
                 transition-colors flex items-center justify-center space-x-2"
      aria-disabled={pending}
      onClick={() => replace('/login')}
    >
      <span>Go Back</span>
      <ArrowLeftIcon className="h-5 w-5" />
    </Button>
  );
}
