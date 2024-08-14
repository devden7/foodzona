import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { Badge } from '../ui/badge';
import { HiChevronDown, HiLocationMarker } from 'react-icons/hi';
import { Input } from '../ui/input';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useAppDispatch } from '@/hooks/use-redux-hook';
import { changeLocation } from '@/store/Location/LocationSlice';
import { useEffect, useRef } from 'react';
import { IResCityList } from '@/model/restaurantModel';

interface Props {
  isBlur: boolean;
  city: string | null | undefined;
  dataCity?: IResCityList[];
  setIsOpen: (value: boolean) => void;
  setIsBlur: (value: boolean) => void;
}
const InputFormSearch = ({
  city,
  isBlur,
  dataCity,
  setIsOpen,
  setIsBlur,
}: Props) => {
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
            className="rounded-full border-none border-slate-300 bg-transparent pl-3 capitalize placeholder:text-base placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-lg lg:placeholder:text-lg"
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
            {dataCity?.map((item: IResCityList) => {
              return (
                <CommandItem
                  key={item.city_name}
                  onSelect={(value) => {
                    dispatch(changeLocation(value));
                    setIsBlur(false);
                  }}
                  className="capitalize"
                >
                  {item.city_name}
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
