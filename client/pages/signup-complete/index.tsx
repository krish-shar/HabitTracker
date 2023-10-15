import React from 'react'

import axios from "axios";

import {useRouter} from "next/router";
import {useUser} from "@clerk/nextjs";



function App() {

    const user = useUser();
    const router = useRouter();
        

        if (user.isLoaded) {
            if (user.isSignedIn) {
            axios.post("http://localhost:8080/api/register", {
                email: user.user.emailAddresses[0].emailAddress,
                name: user.user.firstName + " " + user.user.lastName,
                id: user.user.id
            })
            router.push("/dashboard")
        } else {
            router.push("/")
        
        }
           
        }
  return (
    <div>Loading</div>
  )
}

export default App