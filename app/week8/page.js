"use client";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  if (!isClient) {
    // This code will run on the server
    return <p>Loading...</p>;
  }

  // Client-side code
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        // User is logged in
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm grid gap-2">
          <p className="text-3xl">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="bg-slate-400 dark:bg-neutral-600 hover:bg-red-500 rounded-full p-3 w-40 my-5"
          >
            Logout
          </button>
          <a
            href="/week8/shopping-list"
            className="text-xl hover:underline my-8"
          >
            Go to Shopping List
          </a>
        </div>
      ) : (
        // User is not logged in
        <div>
          <button onClick={handleGitHubSignIn} className="text-xl">
            Login with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;