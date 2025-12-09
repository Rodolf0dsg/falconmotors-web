'use client'
import { getVehicles } from "@/src/api/Vehicles";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { VehicleScrollCard } from "./VehicleScrollCard";
import { VehicleScrollCardSkeleton } from "./VehicleScrollCardSqueleton";


export const StockSection = () => {

  const scrollRef = useRef<HTMLDivElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const speed = 0.5

    const tick = () => {
      
      if (!isHoveringRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed
        
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0
        }
      }
      rafIdRef.current = requestAnimationFrame(tick)
    }

    rafIdRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
  }, [])

  const handleMouseEnter = () => { isHoveringRef.current = true }
  const handleMouseLeave = () => { isHoveringRef.current = false }

    const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles({ limit: 40 }),
    staleTime: 1000 * 60 * 30,
  });

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between px-4 pb-6">
          <h2 className="text-black text-3xl font-bold leading-tight tracking-[-0.015em]">
            Stock Destacado
          </h2>
          <Link
            href={'/vehicles'}
            className="p-2 rounded-md bg-red-600 text-white text-xs md:text-sm font-semibold 
                       border border-gray-300 hover:bg-red-700 transition-colors h-10 cursor-pointer"
          >
            Ver más
          </Link>
        </div>


        <div
          className="flex overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}

        >
          <div className="flex items-stretch p-4 gap-6">

            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <VehicleScrollCardSkeleton key={i} />
                ))
              : data?.data.map(vehicle => (
                  <VehicleScrollCard key={vehicle._id} {...vehicle} />
              ))}

           
          </div>


        </div>
      </div>
    </section>
  )
}
