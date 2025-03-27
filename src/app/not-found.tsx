import { FaceFrownIcon } from '@heroicons/react/24/solid';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <FaceFrownIcon className="w-12 text-darker-bg" />
      <h2 className="text-xl font-bold">404 Not Found</h2>
      <p>Could not find requested page.</p>
    </main>
  );
}