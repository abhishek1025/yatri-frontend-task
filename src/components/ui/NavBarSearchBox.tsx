"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IoMdSearch } from "react-icons/io";
import { useDebouncedCallback } from "use-debounce";

export default function NavBarSearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((searchText: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (searchText) {
      params.set('searchText', searchText);
    } else {
      params.delete('searchText');
    }
    router.push(`/?${params.toString()}`);
  }, 500);

  return (
    <div className='bg-gray-100 px-3 py-1 rounded-3xl flex items-center gap-1 '>
      <IoMdSearch className='text-xl text-gray-600' />
      <input
        type='text'
        className='bg-transparent focus:outline-none p-1 w-full text-black'
        placeholder='Search Blogs ...'
        onChange={e => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('searchText') ?? ''}
      />
    </div>
  );
}

