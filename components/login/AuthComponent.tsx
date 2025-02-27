/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; //important for session components

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in with GitHub...");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl mb-4 text-gray-900">Cler Authentication</h1>
      <button
        onClick={handleSignIn}
        className="bg-red-300 hover:bg-yellow-400 text-green-900 px-4 py-2 rounded"
      >
        Sign in with GitHub
      </button>
      {message && <div className="mt-4 text-blue-600">{message}</div>}
    </div> 
  );
}
