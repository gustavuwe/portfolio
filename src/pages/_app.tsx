import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Technologies } from '../components/Technologies';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <About />
      <Technologies />
    </>
  );
}

export default MyApp;
