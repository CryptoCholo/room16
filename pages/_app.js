import { ClerkProvider } from '@clerk/nextjs';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider appearance={{
      layout: {
        socialButtonsVariant: 'blockButton',
        socialButtonsPlacement: 'bottom'
      }
    }} {...pageProps} >
        <Component {...pageProps} />
    </ClerkProvider>)
}

export default MyApp
