// app/create-account/page.tsx
import { Metadata } from 'next';
import AcmeLogo from '@/app/ui/acme-logo';
import CreateAccountForm from '@/app/ui/create-account-form';

export const metadata: Metadata = {
  title: 'Create Account | Xun.inc Invoicing',
  description: 'Join Xun.inc Invoicing - Create your account to start managing invoices and payments',
};

export default function CreateAccountPage() {
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
              Create Your Account
            </h1>
            <p className="text-blue-100 text-sm">
              Join thousands of businesses managing their invoices with ease
            </p>
          </div>

          {/* Create Account Form */}
          <div className="backdrop-blur-lg rounded-xl">
            <CreateAccountForm />
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-blue-100 text-sm">
              Already have an account?{' '}
              <a 
                href="/login" 
                className="text-white hover:text-blue-200 font-semibold transition-colors"
              >
                Log in
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