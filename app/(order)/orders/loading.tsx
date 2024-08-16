import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <>
      <section className="mb-10 mt-7">
        <div className="container">
          <Skeleton className="mb-5 h-7 w-40" />

          <div className="flex flex-col gap-3 md:hidden">
            <div>
              <div className="rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4 ">
                <Skeleton className="mb-3 h-8 w-72" />
                <div className="mb-3 flex items-center gap-3">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-8 w-20" />
                </div>

                <div>
                  <Skeleton className="h-8 w-72" />
                </div>
              </div>
              <div className="rounded-b-2xl border border-gray-200 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-7 w-16" />
                  <Skeleton className="h-5 w-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden w-full md:table">
            <table className="w-full border-separate border-spacing-y-5">
              <thead>
                <tr>
                  <th>
                    <Skeleton className="h-8 w-36" />
                  </th>
                  <th>
                    <Skeleton className="h-8 w-36" />
                  </th>
                  <th>
                    <Skeleton className="h-8 w-36" />
                  </th>
                  <th>
                    <Skeleton className="size-1" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 max-h-5">
                        <Skeleton className="mb-3 h-8 w-72" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <span className="max-w-96">
                      <Skeleton className="h-8 w-72" />
                    </span>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      <Skeleton className="mb-3 h-7 w-16" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </td>
                  <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div className="w-3"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
