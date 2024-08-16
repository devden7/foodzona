import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="container">
        <Skeleton className="mt-2 h-7 w-52 lg:mb-4" />
      </div>

      <div className="mb-8 mt-4 lg:mt-3 2xl:mt-1">
        <div className="container">
          <div className="flex gap-3 p-2 md:p-5 lg:p-0">
            <Skeleton className="size-16 rounded-xl md:size-24" />
            <div>
              <Skeleton className="mb-2 h-7 w-40 md:mb-5" />
              <div className="flex items-center gap-2 md:gap-5">
                <Skeleton className=" h-7 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 mt-16">
        <div className="container">
          <Skeleton className="size-24 md:size-28" />
        </div>
      </div>

      <section className="mb-8 mt-16">
        <div className="container">
          <div className="mb-5">
            <Skeleton className="mb-4 h-7 w-40" />
            <div>
              <div className="bd:border-slate-100 flex max-w-52 flex-col gap-2 sm:max-w-80  md:rounded-2xl md:border ">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>
            </div>
          </div>

          <div>
            <Skeleton className="mb-4 h-7 w-40" />
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>

              <div className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border">
                <Skeleton className="h-48 w-full rounded-xl md:h-40 lg:h-56" />
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-10 w-full rounded-full xl:mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
