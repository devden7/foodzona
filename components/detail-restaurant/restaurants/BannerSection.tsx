import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

const BannerSection = () => {
  const { location } = useAuth();
  return (
    <section>
      <div className="m-3 flex lg:m-0 lg:px-2 lg:py-1">
        <div className="relative h-[330px] w-full overflow-hidden rounded-lg md:h-[360px]">
          <Image
            className="absolute size-full object-cover object-center"
            src="/assets/header-restaurants-illustration.jpg"
            alt="logo hero"
            width={1886}
            height={360}
          />

          <div className="absolute left-[5%] top-[35%] z-50 gap-1 overflow-visible md:top-[20%] md:mt-10 2xl:left-[19%] ">
            <div className="flex flex-col gap-5 md:gap-0">
              <p className="text-[27px] font-semibold md:mt-5 md:text-3xl lg:w-full lg:text-4xl">
                {location}
              </p>
              <p className="mb-3 max-w-[320px] text-sm md:mt-5 md:text-base lg:w-full lg:text-lg">
                Cari yang enak di sini, dari resto dengan rating jempolan sampai
                hidangan legendaris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
