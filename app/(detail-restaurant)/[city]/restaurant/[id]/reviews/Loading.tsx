import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <>
      <div className="container">
        <Skeleton className="my-2 h-7 w-52 lg:mb-4" />
      </div>

      <div className="container">
        <Skeleton className="mb-9 h-7 w-60 px-3 lg:px-0" />
      </div>

      <div className="container">
        <div className="rounded-md border border-gray-200 p-2 lg:w-1/2">
          <div>
            <Skeleton className="mb-3 size-14 md:size-20" />
          </div>
          <Skeleton className="h-5 w-20 md:h-8 md:w-24" />
          <div className="rounded-md py-2">
            <Skeleton className="mb-2 h-5 w-32 md:h-7 md:w-36" />
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <Skeleton
                  className="flex h-7 w-20 items-center gap-1 rounded-full"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mb-8 mt-10">
        <div className="px-3 sm:container">
          <Skeleton className="mb-3 h-10 w-32" />

          <div className="flex flex-col gap-5">
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>

            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="mb-3 h-5 w-32 md:h-7 md:w-36" />
                    <Skeleton className="h-5 w-28 md:h-7 md:w-32" />
                  </div>
                </div>
                <div>
                  <Skeleton className="size-5" />
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <Skeleton className="mb-3 h-7 w-40" />
                <Skeleton className="h-7 w-72" />
              </div>
              <Skeleton className="h-7 w-40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
