"use client";
import React from 'react'
import HeroSection from '@/components/HeroSection';
import {UserButton, useUser} from "@clerk/nextjs";



function App() {



    return (
        <div>
            <div>
                <HeroSection/>
                {/* hello */}
                {/* <UserButton afterSignOutUrl="/"/> */}
            </div>
        </div>
    )
}

export default App