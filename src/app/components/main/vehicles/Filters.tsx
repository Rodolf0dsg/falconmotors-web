'use client';
import { getVehicleBrandsAndTypes } from "@/src/api/Vehicles";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Select = dynamic(() => import("react-select"), { ssr: false });

type OptionType = {
  value: string;
  label: string;
};

export const Filters = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [brand, setBrand] = useState<OptionType | null >(
    searchParams.get('brand')
      ? { value: searchParams.get('brand')!, label: searchParams.get('brand')! }
      : null
  );
  const [type, setType] = useState<OptionType | null >(
    searchParams.get('type')
      ? { value: searchParams.get('type')!, label: searchParams.get('type')! }
      : null
  );

  const { data, isLoading, isError} = useQuery({
    queryKey: ['vehicleFilters'],
    queryFn: getVehicleBrandsAndTypes,
    staleTime: 1000 * 60 * 24,
  });

  if (isError) {
    return null;
  }

  const dataForBrandsSelect: OptionType[] = [
    { value: "", label: "Todas" },
    ...(data?.brands.map( brand =>({ value: brand, label: brand })) ?? [])
  ];

  const dataForTypesSelect: OptionType[] = [
    { value: "", label: "Todas" },
    ...(data?.types.map( type =>({ value: type, label: type })) ?? [])
  ];

  const updateQueryParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setBrand(null);
    setType(null);
    router.push('?');
  };

  return (
    <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 sticky top-24 self-start">
      <div className="p-6 rounded-xl bg-gray-100 border border-gray-300">
        <h3 className="text-xl font-bold mb-6 text-gray-900">Filtros</h3>
        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="brand">Marca</label>
            <Select
              inputId="brand"
              options={ dataForBrandsSelect } 
              isDisabled={ isLoading }
              isLoading={ isLoading }
              isSearchable={ true }
              placeholder="Seleccione..."
              value={ brand }
              onChange={(newValue) =>{
                const option = newValue as OptionType | null;

                if (!option || option.value === "") {
                  updateQueryParam('brand', null); 
                  setBrand(null);
                } else {
                  updateQueryParam('brand', option.value);
                  setBrand(option);
                }
              }}
              styles={{
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: 150,
                }),
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="type">Tipo</label>
            <Select
              inputId="type"
              options={ dataForTypesSelect } 
              isDisabled={ isLoading }
              isLoading={ isLoading }
              isSearchable={ true }
              placeholder="Seleccione..."
              value={ type }
              onChange={(newValue) =>{
                const option = newValue as OptionType | null;
                if (!option || option.value === "") {
                  updateQueryParam('type', null);
                  setType(null);
                } else {
                  updateQueryParam('type', option.value);
                  setType(option);
                }
              }}
              styles={{
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: 150,
                }),
              }}
            />
          </div>

          <button
            className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
            type="button"
            onClick={ handleClear }
          >
            Limpiar Filtros
          </button>
        </form>
      </div>
    </aside>
  )
}
