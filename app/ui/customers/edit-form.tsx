'use client';

import {
  AtSymbolIcon,
  UserCircleIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Customer } from '@/app/lib/definitions';
import { themeType } from '@/app/lib/theme';

export default function EditInvoiceForm({
  customer,
  userEmail,
  theme
}: {
  customer: Customer;
  userEmail: string;
  theme: themeType;
}) {
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(updateCustomerWithId, initialState);

  return (
    <form action={dispatch}>
      <input type="hidden" name="userEmail" value={userEmail} />

      <div className={`rounded-md ${theme.container} p-4 md:p-6`}>
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`mb-2 block text-sm font-medium ${theme.text}`}
          >
            Name:
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              defaultValue={customer.name}
              type="text"
              placeholder="Type the customer name"
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${theme.border} ${theme.bg} ${theme.text}`}
              aria-describedby="name-error"
            />
            <UserCircleIcon className={`pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${theme.inputIcon}`} />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className={`mb-2 block text-sm font-medium ${theme.text}`}
          >
            Email:
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              defaultValue={customer.email}
              type="email"
              placeholder="Enter the customer email"
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${theme.border} ${theme.bg} ${theme.text}`}
              aria-describedby="email-error"
            />
            <AtSymbolIcon className={`pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${theme.inputIcon}`} />
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className={`mb-2 block text-sm font-medium ${theme.text}`}
          >
            Phone Number:
          </label>
          <div className="relative">
            <input
              id="phone"
              name="phone"
              defaultValue={customer.phone} // Prepopulate phone number
              type="tel"
              placeholder="Enter the phone number"
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${theme.border} ${theme.bg} ${theme.text}`}
              aria-describedby="phone-error"
            />
            <PhoneIcon className={`pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${theme.inputIcon}`} />
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-4">
          <label
            htmlFor="billing_address"
            className={`mb-2 block text-sm font-medium ${theme.text}`}
          >
            Billing Address:
          </label>
          <div className="relative">
            <input
              id="billing_address"
              name="billing_address"
              defaultValue={customer.billing_address} // Prepopulate billing address
              type="text"
              placeholder="Enter the billing address"
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${theme.border} ${theme.bg} ${theme.text}`}
            />
            <MapPinIcon className={`pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${theme.inputIcon}`} />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mb-4">
          <label
            htmlFor="shipping_address"
            className={`mb-2 block text-sm font-medium ${theme.text}`}
          >
            Shipping Address:
          </label>
          <div className="relative">
            <input
              id="shipping_address"
              name="shipping_address"
              defaultValue={customer.shipping_address} // Prepopulate shipping address
              type="text"
              placeholder="Enter the shipping address"
              className={`peer block w-full rounded-md border py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${theme.border} ${theme.bg} ${theme.text}`}
            />
            <MapPinIcon className={`pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${theme.inputIcon}`} />
          </div>
        </div>

        {state?.message && (
          <p className="mt-2 text-sm text-red-500" key={state.message}>
            {state.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className={`
            flex h-10 items-center rounded-lg px-4 text-sm font-medium 
            transition-colors
            ${theme.container} ${theme.border} ${theme.text}
            ${theme.hoverBg} ${theme.hoverText}
          `}
        >
          Cancel
        </Link>
        <Button type="submit">Update Customer</Button>
      </div>
    </form>
  );
}
