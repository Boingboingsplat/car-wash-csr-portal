'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">An error occured!</h2>
      <button
        className="mt-4 p-2 rounded-lg font-bold bg-lighter-bg text-content-fg hover:bg-accent hover:text-white"
        onClick={
          // Attempt to recover by trying to re-render the route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}