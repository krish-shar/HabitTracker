import { SignUp, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { useRouter } from "next/router";


export default function Page() {


  return (
    <div>
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
