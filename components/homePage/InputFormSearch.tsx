import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { Badge } from '../ui/badge';
import { HiChevronDown, HiLocationMarker } from 'react-icons/hi';
import { Input } from '../ui/input';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useAppDispatch } from '@/hooks/use-redux-hook';
import { changeLocation } from '@/store/Location/LocationSlice';
import { useEffect, useRef } from 'react';

const dummyLocation = [
  { city: 'Jakarta', id: 0 },
  { city: 'Surabaya', id: 1 },
  { city: 'Aceh', id: 2 },
  { city: 'Papua', id: 3 },
  { city: 'Samarinda', id: 4 },
  { city: 'Bandung', id: 5 },
  { city: 'Yogyakarta', id: 6 },
  { city: 'Serang', id: 7 },
  { city: 'Bekasi', id: 8 },
  { city: 'Depok', id: 9 },
  { city: 'Bogor', id: 10 },
  { city: 'Tasikmalaya', id: 11 },
];

interface Props {
  isBlur: boolean;
  city: string | null | undefined;
  setIsOpen: (value: boolean) => void;
  setIsBlur: (value: boolean) => void;
}
const InputFormSearch = ({ city, isBlur, setIsOpen, setIsBlur }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const dispatch = useAppDispatch();
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        searchBoxRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setIsBlur(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsBlur]);

  useEffect(() => {});
  return (
    <Command ref={searchBoxRef}>
      <Badge
        variant="outline"
        className="mb-3 flex items-center justify-between lg:w-80"
      >
        <div className="flex w-full items-center gap-2">
          <HiLocationMarker color="red" size={20} />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Ketik lokasimu"
            className=" rounded-full border-none border-slate-300 bg-transparent pl-3 placeholder:text-base placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-lg lg:placeholder:text-lg"
            onClick={() => setIsOpen(true)}
            onFocus={() => setIsBlur(true)}
            value={!city ? '' : city}
            readOnly
          />
        </div>

        <HiChevronDown color="grey" size={20} />
      </Badge>
      <CommandList className={`${isDesktop ? 'absolute top-14 size-80' : ''}`}>
        {isDesktop && isBlur && (
          <CommandGroup
            heading="City"
            className="bg-white"
            onBlur={() => setIsBlur(false)}
          >
            {dummyLocation.map((item: any) => {
              return (
                <CommandItem
                  key={item.id}
                  onSelect={(value) => {
                    dispatch(changeLocation(value));
                    setIsBlur(false);
                  }}
                >
                  {item.city}
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};

export default InputFormSearch;
