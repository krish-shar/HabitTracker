import {ChakraProvider} from '@chakra-ui/react'
import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Navbar from '@/components/Navbar'


import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import LogoSection from '@/components/LogoSection';
<<<<<<< HEAD
import MindfulSection from '@/components/MindfulSection';

=======
import { Router } from 'next/router';
>>>>>>> 128dc66d437a56f118b09f9677e7bca41015e61b
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
