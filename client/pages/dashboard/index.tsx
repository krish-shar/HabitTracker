import React, { useEffect, useState } from 'react';
import { useUser, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import WorkoutProgress from '@/components/WorkoutProgress';
import Journal from '@/components/Journal';
import Trophies from '@/components/Trophies';
import { Box } from '@chakra-ui/react';

const Dashboard = () => {
  const router = useRouter();
  const user = useUser();

  // Create a function to route to the "/camera" page
  const useCamera = () => {
    router.push('/camera');
  };

  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  if (!user || user.isSignedIn === false || user.user === null) {
    router.push('/sign-in');
  }

  return (
    <>
      <div className="text-5xl font-semibold mb-4 py-7"> {/* Increased text size, made it bold, and added padding */}
        { <Box className='pl-10'> Welcome Back, {user.user?.fullName} </Box> }
      </div>

      <div className="mt-4 pl-10 flex flex-row">
        <WorkoutProgress />
        <Journal />
      </div>

      <div> 
        
        <div className="translate-y-5 align-center">
        <h3 className='p-12 text-xl '>Complete today&apos;s activities to unlock the next trophy! </h3>
        <Trophies />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
