'use client'

import { useRouter } from 'next/navigation'; // Importing useRouter hook

export default function Home() {
  const router = useRouter(); // Initialize the router

  // Function to handle navigation on button click
  const handleNavigation = (path: string) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <button
        onClick={() => handleNavigation('/pipelines')}
        className="w-56 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Go to Pipelines
      </button>
      <button
        onClick={() => handleNavigation('/sign-in')}
        className="w-56 px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Sign In
      </button>
      <button
        onClick={() => handleNavigation('/sign-up')}
        className="w-56 px-6 py-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
      >
        Sign Up
      </button>
    </div>
  );
}
