'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="flex p-4 bg-stone-300 rounded-full">
      <MagnifyingGlassIcon className="shrink-0 w-8 h-8 mr-2"/>
      <input
        className="grow"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}