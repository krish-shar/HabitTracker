import {ChakraProvider} from '@chakra-ui/react'
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Navbar from '@/components/Navbar'

import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import LogoSection from '@/components/LogoSection';
import MindfulSection from '@/components/MindfulSection';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ClerkProvider>
            <ChakraProvider>
                <LogoSection />
                <Navbar/>
                <MindfulSection />

                <Component {...pageProps} />
            </ChakraProvider>
        </ClerkProvider>
    )

}
/*export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/
