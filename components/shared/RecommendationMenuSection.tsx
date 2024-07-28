import Image from 'next/image';
import Link from 'next/link';
import { categoriesLists } from '@/constants';
const RecommendationMenuSection = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-12 md:grid-cols-4 lg:grid-cols-6">
      {categoriesLists.map((item) => (
        <Link href={item.href} key={item.id}>
          <div className="flex aspect-square cursor-pointer flex-col items-center justify-center  text-sm font-semibold md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md">
            <div className="relative size-full items-center justify-center rounded-2xl border-2  border-slate-100 transition active:bg-slate-50 md:size-1/2 md:border-0 md:transition md:duration-500 lg:size-[70%]">
              <Image
                src={item.imageUrl}
                alt={item.label}
                height={60}
                width={60}
                className="absolute  left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <p className="mt-2">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendationMenuSection;
