import { AppProps } from 'next/app';
import { AppFrame } from "@/components";
import "../styles/globals.css"
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppFrame>
      <Component {...pageProps} />
    </AppFrame>
  );
}

export default MyApp;