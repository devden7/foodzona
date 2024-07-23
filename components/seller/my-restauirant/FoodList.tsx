import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HiDotsVertical } from 'react-icons/hi';
import Image from 'next/image';

import { restaurantLists } from '@/constants';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import FormFood from './FormFood';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FoodList = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-4 md:justify-between">
      {restaurantLists.map((item) => (
        <div
          key={item.id}
          className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
        >
          <div className="relative h-40 w-48 overflow-hidden rounded-xl md:w-56 lg:h-[600px] lg:w-full">
            <Image
              src={item.imageUrl}
              alt={item.label}
              fill
              objectFit="cover"
              quality={100}
            />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="absolute left-[12%] top-[10%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-lg bg-white p-1 text-sm font-medium text-black">
                  <HiDotsVertical size={15} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute -top-5 left-8 lg:-top-3 lg:left-10 xl:left-12 2xl:left-14">
                <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
                  <DialogTrigger className="size-full">
                    <DropdownMenuItem className="cursor-pointer">
                      Edit
                    </DropdownMenuItem>
                  </DialogTrigger>

                  <DialogContent className="flex w-3/4 flex-col items-start px-8">
                    <DialogTitle>Menu</DialogTitle>
                    <FormFood type="Edit food" />
                  </DialogContent>
                </Dialog>
                <DropdownMenuItem className="cursor-pointer">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="size-full">
            <h3 className="mb-3 line-clamp-2 font-semibold">{item.label}</h3>
            <div className="mb-3 flex max-h-96 flex-wrap gap-2">
              <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                description food
              </p>
            </div>
            <div>
              <p className="text-lg font-medium">10.000</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
