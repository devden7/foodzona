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
            <Skeleton className="mb-3 h-7 w-44" /> {/* ini */}
            <div className="mb-4 flex justify-between border-b-[1.5px] border-gray-200">
              <div>
                <Skeleton className="mb-3 h-7 w-48" />
                {/* ini */}
                <Skeleton className="h-7 w-20" /> {/* ini */}
              </div>
              <div>
                <Skeleton className="mb-4 size-24 rounded-xl" /> {/* ini */}
                <div className="mb-3 flex justify-between gap-2">
                  <Skeleton className="size-6 rounded-full" />
                  {/* ini */}
                  <Skeleton className="size-7" /> {/* ini */}
                  <Skeleton className="size-6 rounded-full" />
                  {/* ini */}
                </div>
              </div>
            </div>
            <div className="mb-3 flex justify-between">
              <div>
                <Skeleton className="mb-3 h-7 w-44" /> {/* ini */}
                <Skeleton className="h-7 w-36" /> {/* ini */}
              </div>
              <Skeleton className="h-7 w-36 rounded-full" /> {/* ini */}
            </div>
          </div>

          <div className="rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Skeleton className="mb-3 h-7 w-40" /> {/* ini */}
            <div className="mb-2 flex justify-between">
              <Skeleton className="h-7 w-24" /> {/* ini */}
              <Skeleton className="h-7 w-20" /> {/* ini */}
            </div>
            <div className="flex justify-between">
              <Skeleton className="mb-4 h-7 w-56" /> {/* ini */}
              <Skeleton className="mb-2 h-7 w-20" /> {/* ini */}
            </div>
            <div className="flex justify-between  border-t-[1.5px] border-gray-200">
              <Skeleton className="mb-2 mt-3 h-7 w-36" /> {/* ini */}
              <Skeleton className="mb-2 mt-3 h-7 w-28" /> {/* ini */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
