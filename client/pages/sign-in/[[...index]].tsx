import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="flex items-center justify-center h-screen" // Usenpx  h-screen to make it centered on the entire viewport
      style={{
        width: "100vw", // Make the container cover the entire viewport width
        height: "100vh", // Make the container cover the entire viewport height
      }}
    >
      <div className="w-full max-w-xs"> {/* Adjust max-width as needed */}
        <SignIn />
      </div>
    </div>
  );
}
