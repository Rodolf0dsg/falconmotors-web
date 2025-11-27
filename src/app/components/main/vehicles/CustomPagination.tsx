'use client'

import { useSearchParams, useRouter } from "next/navigation";

interface CumstomPaginationProps {
  pages?: number;
}

export const CustomPagination = ({ pages = 1 }: CumstomPaginationProps) => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get('page')) || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    router.push(`?${params.toString()}`);
  };

  

  return (
    <div className="flex items-center justify-center p-4 mt-8">

      <button 
        className="flex size-10 items-center justify-center text-gray-500 dark:text-white cursor-pointer hover:bg-gray-200 dark:hover:bg-card-border-dark rounded-full"
        disabled={ page == 1 }
        onClick={ () => handlePageChange(page - 1) }
      >
          <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {
        Array.from({ length: pages }).map( (_, index) => {
          const pageNumber = index + 1;
          const isActive = page === pageNumber;

          return (
            <button 
              className={`text-sm font-bold leading-normal cursor-pointer flex size-10 items-center justify-center text-white rounded-full
                ${isActive
                  ? "font-bold text-white bg-primary tracking-[0.015em]"
                  : "font-normal text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-card-border-dark"
                }
              `}
              key={ pageNumber }
              onClick={ () => handlePageChange(pageNumber) }
            >
              { pageNumber }
            </button>
          )
        })
      }

      <button 
        className="flex size-10 items-center justify-center text-gray-500 dark:text-white cursor-pointer hover:bg-gray-200 dark:hover:bg-card-border-dark rounded-full"
        disabled={ page == pages }
        onClick={ () => handlePageChange(page - 1) }
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  )
}
