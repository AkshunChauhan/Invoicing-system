// page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

// Type definitions
type Message = string;

interface AnimatedTextProps {
  messages: Message[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

// Constants
const MESSAGES: Message[] = [
  "Welcome to the Future of Invoicing",
  "Streamline Your Business Operations",
  "Manage Payments with Ease",
  "Generate Professional Invoices Instantly"
];

// Animated Text Component
const AnimatedText: React.FC<AnimatedTextProps> = ({
  messages,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDelete = 2000
}) => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < messages[messageIndex].length) {
          setText(messages[messageIndex].slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBeforeDelete);
        }
      } else {
        if (text.length === 0) {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        } else {
          setText(messages[messageIndex].slice(0, text.length - 1));
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, messageIndex, isDeleting, messages, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 h-20">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

// Main Page Component
const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl font-bold">Xun.inc</div>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              Login <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </nav>

        <div className="py-20">
          <div className="text-center">
            <AnimatedText 
              messages={MESSAGES}
              typingSpeed={100}
              deletingSpeed={50}
              delayBeforeDelete={2000}
            />
            
            <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
              Your all-in-one solution for invoice management, payment tracking, and business operations.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <FeatureCard
                title="Invoice Generation"
                description="Create professional invoices instantly with our intuitive interface."
              />
              <FeatureCard
                title="Payment Tracking"
                description="Monitor all your payments and outstanding balances in real-time."
              />
              <FeatureCard
                title="Business Analytics"
                description="Gain valuable insights with comprehensive business analytics."
              />
            </div>

            <div className="mt-16">
              <Link
                href="/signup"
                className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <footer className="py-8 text-center text-blue-100 border-t border-blue-700">
          <p>Proudly designed and developed by Xun.inc in Red Deer, Alberta</p>
        </footer>
      </div>
    </main>
  );
};

export default Page;