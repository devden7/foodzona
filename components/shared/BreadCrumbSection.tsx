'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useAppSelector } from '@/hooks/use-redux-hook';

interface Props {
  pageName?: string;
  restaurantName?: string;
}
const BreadCrumbSection = ({ pageName, restaurantName }: Props) => {
  const location = useAppSelector((state) => state.location.city);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  if (pageName === 'restaurant' && isDesktop) {
    return (
      <div className="container">
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
                href={`/${location?.toLocaleLowerCase()}/restaurants`}
              >
                {location}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="hover:text-green-700 ">
                {restaurantName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

  if (pageName === 'seller') {
    return (
      <div className="container">
        <Breadcrumb className="my-5">
          <BreadcrumbList className="text-black">
            <BreadcrumbItem>
              <BreadcrumbPage className="hover:text-green-700">
                My-Restaurant
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="hover:text-green-700 ">
                {restaurantName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  }

  if (pageName === 'recommendation') {
    return (
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
              className="capitalize hover:text-green-700"
              href={`/${location?.toLocaleLowerCase()}`}
            >
              {location}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="hover:text-green-700 ">
              Rekomendasi
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
  return (
    <>
      {pageName !== 'restaurant' && (
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
                className="capitalize hover:text-green-700"
                href={`/${location}/restaurants`}
              >
                {location}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
};
export default BreadCrumbSection;
