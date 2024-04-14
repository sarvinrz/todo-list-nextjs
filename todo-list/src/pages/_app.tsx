import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../utils/i18';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
