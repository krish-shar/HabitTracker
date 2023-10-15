"use client"
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import LogoSection from '@/components/LogoSection'
// import { BrowserRouter as Router, Switch, Route} from 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     
      <div>             
    <ChakraProvider>
      <LogoSection />
      <Navbar />
      
      <Component {...pageProps} />
    </ChakraProvider>
    </div>      
    
    </>
  )
}
/*export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/
