export const VehicleScrollCardSkeleton = () => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-gray-200 shadow-lg min-w-72 border border-gray-300 animate-pulse">
      <div className="w-full aspect-video bg-gray-300 rounded-t-lg"></div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="h-10 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};