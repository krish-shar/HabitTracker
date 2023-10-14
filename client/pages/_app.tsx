"use client";
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import LogoSection from '@/components/LogoSection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <body>
      <div>             
    <ChakraProvider>
      <LogoSection />
      <Navbar />
      <HeroSection />
      <Component {...pageProps} />
    </ChakraProvider>
    </div>      
    </body>
    </>
  )
}
/*export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/
