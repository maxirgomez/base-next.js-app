//* Styles
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/button.css'
import '../styles/card-carousel.css'
import '../styles/separator.css'


//* Swiper
import "swiper/css";
import "swiper/css/pagination";

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
