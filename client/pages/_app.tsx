"use client";
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">                            
     <head></head>
     <body>
      <div>             
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <Component {...pageProps} />
    </ChakraProvider>
    </div>      
    </body>
    </html>
  )
}
/*export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/
