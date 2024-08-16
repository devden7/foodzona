import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <>
      <div className=" mb-16 mt-3">
        <div className="m-3 flex lg:m-0 lg:px-2 lg:py-1">
          <Skeleton className="h-[360px] w-[450px] grow rounded-[30px] sm:w-[600px] md:h-[414px] md:w-[730px] lg:h-[441px]" />
        </div>
      </div>

      <div className="mb-[75px]">
        <div className="container pt-12 2xl:w-[1200px]">
          <Skeleton className="mx-auto h-10 w-96" />
          <div className="mt-7">
            <div className="grid grid-cols-3 justify-start gap-3 md:max-w-[600px]">
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 md:rounded-2xl lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 md:rounded-2xl lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 md:rounded-2xl lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[75px]">
        <div className="container pt-12 2xl:w-[1200px]">
          <Skeleton className="mx-auto h-10 w-72" />
          <div className="my-7">
            <div className=" grid grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 rounded-full md:size-36 lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 rounded-full md:size-36 lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 rounded-full md:size-36 lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 rounded-full md:size-36 lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 rounded-full md:size-36 lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Skeleton className="mb-3 size-32 rounded-full md:size-36 lg:size-40" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
          </div>

          <Skeleton className="mx-auto h-10 w-44" />
        </div>
      </div>
    </>
  );
};

export default Loading;
