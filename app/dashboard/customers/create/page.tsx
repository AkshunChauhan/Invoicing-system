import { getUser } from '@/app/lib/data';
import { darkTheme, lightTheme, systemDefault, themeType } from '@/app/lib/theme';
import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { auth } from '@/auth';
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Create Customer',
};

export default async function Page() {
  const session = await auth();
  const userEmail = session?.user?.email || '';

  // Ensure the user is authenticated
  if (!userEmail) {
    return <p>Unauthorized. Please log in.</p>; // Or redirect to login page
  }

  const user = await getUser(userEmail);

  if (!user) {
    return <p>User not found</p>; // Handle case where user doesn't exist
  }

  let theme: themeType = systemDefault;

  // Determine user theme
  switch (user.theme) {
    case 'system':
      theme = systemDefault;
      break;
    case 'dark':
      theme = darkTheme;
      break;
    case 'light':
      theme = lightTheme;
      break;
    default:
      theme = systemDefault;
      break;
  }

  // Extract additional user details
  const phone = user.phone || ''; // Default to an empty string if not available
  const billingAddress = user.billing_address || ''; 
  const shippingAddress = user.shipping_address || '';

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
        theme={theme}
      />
      <Form 
        userEmail={userEmail} 
        theme={theme}
        phone={phone}
        billingAddress={billingAddress}
        shippingAddress={shippingAddress}
      />
    </main>
  );
}
