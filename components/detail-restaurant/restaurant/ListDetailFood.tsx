import { Button } from '@/components/ui/button';
import { IDataFood } from '@/model/foodModel';
import Image from 'next/image';

interface Props {
  item: IDataFood;

  cartBtnHandler: (item: IDataFood) => void;
}

const API_URL = process.env.NEXT_PUBLIC_API;

const ListDetailFood = ({ item, cartBtnHandler }: Props) => {
  return (
    <>
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-green-500 md:h-40 lg:h-56">
        <Image
          className="object-cover"
          src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
          alt="makanan"
          fill
          sizes="50vw"
          quality={90}
        />
      </div>
      <p className="font-semibold lg:text-lg">{item.name}</p>
      <p className="font-semibold lg:text-lg">{item.price}</p>
      <Button
        className="rounded-full border border-green-700 bg-white text-green-700 hover:bg-green-200 xl:mt-4"
        onClick={() => cartBtnHandler(item)}
      >
        Add
      </Button>
    </>
  );
};

export default ListDetailFood;
