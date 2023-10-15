import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React from "react"; // Import React

const Dashboard = () => {
  const router = useRouter();

  // Create a function to route to the "/camera" page
  const useCamera = () => {
    router.push("/camera");
  };

  return (
    <div>
      Dashboard
      <button onClick={useCamera} className="text-lg ">Use Camera</button>
      <UserButton />
    </div>
  );
};

export default Dashboard;
