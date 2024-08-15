import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { HiSearch, HiUser } from 'react-icons/hi';
import { useState } from 'react';
import { Session } from 'next-auth';

interface Props {
  pathname: string;
  logoutBtnHandler: () => void;
  session: Session | null;
}
const UserDropdown = ({ pathname, logoutBtnHandler, session }: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <div className="flex items-center gap-5">
      <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-green-50">
        <HiSearch color="green" size={25} />
      </div>
      {!session && pathname !== '/login' && (
        <div className="hidden rounded-full bg-green-50 p-2 font-bold text-green-700 md:block">
          <Link href="/login">Masuk/Daftar</Link>
        </div>
      )}
      <DropdownMenu open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
        <DropdownMenuTrigger asChild>
          {session && (
            <div className="size-10 rounded-full bg-gray-100">
              <span className="flex size-full cursor-pointer items-center justify-center font-medium text-white">
                <HiUser color="black" />
              </span>
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 w-56">
          <div className="mb-3 flex flex-col items-start gap-1 pl-2 pt-2 focus:bg-white">
            <h4 className="font-semibold">{session?.user.username}</h4>
            <p className="text-xs text-black/60">{session?.user.name}</p>
          </div>
          <DropdownMenuItem>
            <Link
              href="/orders"
              className="size-full font-semibold"
              onClick={() => setIsOpenDropdown(false)}
            >
              Orders
            </Link>
          </DropdownMenuItem>
          {session?.user.restaurant !== null && (
            <DropdownMenuItem className="font-semibold">
              <Link
                href="/my-restaurant"
                onClick={() => setIsOpenDropdown(false)}
                className="size-full"
              >
                My Restaurant
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={logoutBtnHandler}
            className="size-full cursor-pointer"
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;
