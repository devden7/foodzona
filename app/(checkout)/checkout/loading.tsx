import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <>
      <div className="container">
        <Skeleton className="my-5 h-7 w-60 px-3 lg:px-0" />
      </div>

      <div className="my-7 mb-10">
        <div className="container">
          <div className="mb-6 rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Skeleton className="mb-3 h-7 w-44" />
            <div className="mb-4 flex justify-between border-b-[1.5px] border-gray-200">
              <div>
                <Skeleton className="mb-3 h-7 w-48" />

                <Skeleton className="h-7 w-20" />
              </div>
              <div>
                <Skeleton className="mb-4 size-24 rounded-xl" />
                <div className="mb-3 flex justify-between gap-2">
                  <Skeleton className="size-6 rounded-full" />

                  <Skeleton className="size-7" />
                  <Skeleton className="size-6 rounded-full" />
                </div>
              </div>
            </div>
            <div className="mb-3 flex justify-between">
              <div>
                <Skeleton className="mb-3 h-7 w-44" />
                <Skeleton className="h-7 w-36" />
              </div>
              <Skeleton className="h-7 w-36 rounded-full" />
            </div>
          </div>

          <div className="rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Skeleton className="mb-3 h-7 w-40" />
            <div className="mb-2 flex justify-between">
              <Skeleton className="h-7 w-24" />
              <Skeleton className="h-7 w-20" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="mb-4 h-7 w-56" />
              <Skeleton className="mb-2 h-7 w-20" />
            </div>
            <div className="flex justify-between  border-t-[1.5px] border-gray-200">
              <Skeleton className="mb-2 mt-3 h-7 w-36" />
              <Skeleton className="mb-2 mt-3 h-7 w-28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
