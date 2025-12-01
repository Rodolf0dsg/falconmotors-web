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
      <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
        Automóviles Disponibles
      </p>
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-gray-100 dark:bg-card-border-dark">
          <div className="text-gray-500 dark:text-text-muted-dark flex items-center justify-center p-4">
            {/* <span className="material-symbols-outlined">search</span> */}
            <FaSearch size={ 23 } />
          </div>
          <input
            value={search}
            onChange={(e) => handleChange(e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-text-muted-dark px-4 pl-2 text-base font-normal leading-normal"
            placeholder="Buscar por marca, modelo o año..."
          />
        </div>
      </label>
    </div>
  );
};