import SideNav from '@/app/ui/dashboard/sidenav';
import { auth } from '@/auth';
import { getUser } from '../lib/data';
import { darkTheme, lightTheme, systemDefault, themeType } from '../lib/theme';

export default async function Layout({ children }: { children: React.ReactNode }) {
  // Get session data and user email
  const session = await auth();
  
  // Check if session is available and user.email exists
  const userEmail = session?.user?.email;
  if (!userEmail) {
    // Handle error, maybe redirect or use a default theme
    console.error('User email is missing!');
    return <div>Missing user information</div>;
  }
  
  // Fetch user data using email
  const user = await getUser(userEmail);
  
  let theme: themeType;
  
  // Default theme case in case user.theme is invalid
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
      // Handle invalid theme value (if any)
      theme = systemDefault;
      console.warn('Invalid theme, defaulting to system theme');
      break;
  }

  return (
    <div className={`hidden h-auto w-full grow rounded-md md:block ${theme?.container || 'default-container'}`}>
      <div className="w-full flex-none md:w-64">
        <SideNav theme={theme} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
