import {AppProps} from 'next/app';
import {AppFrame} from "@/components";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppFrame>
      <Component {...pageProps} />
    </AppFrame>
  );
}

export default MyApp;