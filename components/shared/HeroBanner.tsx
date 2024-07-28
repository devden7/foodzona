import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  children?: React.ReactNode;
}
const HeroBanner = ({ src, alt, width, height, children }: Props) => {
  return (
    <div className="h-44 max-w-full overflow-hidden sm:h-60 md:h-72 lg:h-64 xl:h-80 2xl:h-[480px]">
      <Image
        className="size-full object-cover object-center"
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
      />
      {children}
    </div>
  );
};

export default HeroBanner;
