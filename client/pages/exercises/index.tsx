"use client";
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';


function Exercises() {
  const router = useRouter()

  

  return (
    <>
    <div className='text-xl'>exercises</div>
    </>
  )
}

export default Exercises


// const Dashboard = () => {
//   const router = useRouter();

//   // Create a function to route to the "/camera" page
//   const useCamera = () => {
//     router.push("/camera");
//   };

//   return (
//     <div>
//       Dashboard
//       <button onClick={useCamera} className="text-lg ">Use Camera</button>
//       <UserButton />
//     </div>
//   );