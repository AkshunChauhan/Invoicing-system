// app/login/page.tsx
import { Metadata } from 'next';
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export const metadata: Metadata = {
  title: 'Login | Xun.inc Invoicing',
  description: 'Access your account to manage invoices and payments',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 px-4">
      <div className="max-w-md mx-auto">
        {/* Glass Card Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="w-32 md:w-36">
              <AcmeLogo />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-blue-100 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Login Form */}
          <div className="backdrop-blur-lg rounded-xl">
            <LoginForm />
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-blue-100 text-sm">
              Don't have an account?{' '}
              <a 
                href="/signup" 
                className="text-white hover:text-blue-200 font-semibold transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-blue-100 text-sm">
          <p>© 2024 Xun.inc. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}