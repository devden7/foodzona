'use client';

import { useState, useEffect } from 'react';
import SearchLocation from '@/components/homePage/SearchLocation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
const ReviewsUserf = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);

  const handlerSearchLocationDrawer = (value: any) => {
    setSearchLocation(value.city);
  };

  const sizeScreenHandler = () => {
    setMediumScreen(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sizeScreenHandler();
    }

    window.addEventListener('resize', sizeScreenHandler);

    return () => {
      window.removeEventListener('resize', sizeScreenHandler);
    };
  }, []);

  if (typeof mediumScreen === 'undefined') {
    return null;
  }

  return (
    <>
      <div className="container">
        <SearchLocation
          mediumScreen={mediumScreen}
          searchLocation={searchLocation}
          isOpen={isOpen}
          handlerSearchLocationDrawer={handlerSearchLocationDrawer}
          setSearchLocation={setSearchLocation}
          setIsOpen={setIsOpen}
          type="Detail Restaurant"
        />

        {mediumScreen >= 1024 && (
          <Breadcrumb className="my-5">
            <BreadcrumbList className="text-black">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-green-700" href="/">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-green-700"
                  href="/components"
                >
                  Kotamu
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-green-700 ">
                  Restoranmu
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>
      <section></section>
    </>
  );
};

export default ReviewsUserf;
