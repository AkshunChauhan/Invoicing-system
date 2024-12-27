'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  UserIcon,
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { createUserWithCredentials } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';

export default function CreateAccountForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUserWithCredentials, initialState);

  return (
    <div className="w-full space-y-6">
      <form action={dispatch} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            className="block text-sm font-medium text-blue-100 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 pl-10 bg-white/10 border border-blue-300/20 rounded-lg 
                        text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 
                        focus:ring-blue-400/50 transition-all"
              id="name"
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Email Field */}
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
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            className="block text-sm font-medium text-blue-100 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <p className="text-xs text-blue-200/80 mb-2">
            Must contain at least 8 characters, one special character, one uppercase and one lowercase letter.
          </p>
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
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label
            className="block text-sm font-medium text-blue-100 mb-1"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 pl-10 bg-white/10 border border-blue-300/20 rounded-lg 
                        text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 
                        focus:ring-blue-400/50 transition-all"
              id="confirm-password"
              type="password"
              name="confirm-password"
              placeholder="Confirm password"
              required
            />
            <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-200" />
          </div>
        </div>

        {/* Error Messages */}
        {state.message && (
          <div
            className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
            aria-live="polite"
            aria-atomic="true"
          >
            <ExclamationCircleIcon className="h-5 w-5" />
            <p className="text-sm">{state.message}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <CreateAccountButton />
          <ReturnToLoginPageButton />
        </div>
      </form>
    </div>
  );
}

function CreateAccountButton() {
  return (
    <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-lg 
                      transition-colors flex items-center justify-center space-x-2">
      <span>Create Account</span>
      <ArrowRightIcon className="h-5 w-5" />
    </Button>
  );
}

function ReturnToLoginPageButton() {
  const { replace } = useRouter();

  return (
    <Button 
      className="w-full bg-blue-700/50 hover:bg-blue-600/50 text-white py-2 rounded-lg 
                 transition-colors flex items-center justify-center space-x-2"
      onClick={() => replace('/login')}
    >
      <span>Return to Login</span>
      <ArrowLeftIcon className="h-5 w-5" />
    </Button>
  );
}