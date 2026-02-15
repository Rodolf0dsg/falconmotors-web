'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const handleChange = (value: string) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim() === '') {
      params.delete('search'); 
    } else {
      params.set('search', value);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-6">
      <p className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
        Automóviles Disponibles
      </p>
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-gray-300">
          <div className="text-gray-700 flex items-center justify-center p-4">
            {/* <span className="material-symbols-outlined">search</span> */}
            <FaSearch size={ 23 } />
          </div>
          <input
            value={search}
            onChange={(e) => handleChange(e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border border-gray-300 text-gray-900 focus:outline-0 focus:ring-0 bg-white h-full placeholder:text-gray-500 px-4 pl-2 text-base font-normal leading-normal rounded-r-lg"
            placeholder="Buscar por marca, modelo o año..."
          />
        </div>
      </label>
    </div>
  );
};