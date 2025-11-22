

export const CustomPagination = () => {
  return (
    <div className="flex items-center justify-center p-4 mt-8">
      <a className="flex size-10 items-center justify-center text-gray-500 dark:text-white" href="#"><span
        className="material-symbols-outlined">chevron_left</span></a>
      <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-primary"
        href="#">1</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-card-border-dark"
        href="#">2</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-card-border-dark"
        href="#">3</a>
      <span
        className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full">...</span>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-card-border-dark"
        href="#">10</a>
      <a className="flex size-10 items-center justify-center text-gray-500 dark:text-white" href="#"><span
        className="material-symbols-outlined">chevron_right</span></a>
    </div>
  )
}
