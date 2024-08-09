'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useAuth } from '@/context/AuthContext';
import { useMediaQuery } from '@/hooks/use-media-query';

interface Props {
  pageName?: string;
  restaurantName?: string;
}
const BreadCrumbSection = ({ pageName, restaurantName }: Props) => {
  const { location } = useAuth();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  console.log(isDesktop);
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
                href={`/${location?.toLocaleLowerCase()}`}
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
              className="hover:text-green-700"
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
    <div className="container">
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
              <BreadcrumbPage className="hover:text-green-700 ">
                {location}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </div>
  );
};
export default BreadCrumbSection;
