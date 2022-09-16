import { UserProvider } from "@auth0/nextjs-auth0";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  // If you've used `withPageAuthRequired`, pageProps.user can pre-populate the hook
  // if you haven't used `withPageAuthRequired`, pageProps.user is undefined so the hook
  // fetches the user from the API route
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}
