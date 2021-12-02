import '../styles/globals.css'
import type { AppProps } from 'next/app'
import header from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return <div><Component {...pageProps} />
  </div>
}

export default MyApp
