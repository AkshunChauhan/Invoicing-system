import AcmeLogo from '@/app/ui/acme-logo';
import ForgotForm from '@/app/ui/forgot-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot password',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4 py-16">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
          <div className="mb-8 flex justify-center">
            <div className="w-32 md:w-36">
              <AcmeLogo />
            </div>
          </div>
          <ForgotForm />
        </div>
      </div>
    </main>
  );
}
