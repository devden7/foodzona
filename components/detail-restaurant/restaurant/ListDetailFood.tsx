import { Button } from '@/components/ui/button';
import { IDataFood } from '@/model/foodModel';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface Props {
  item: IDataFood;
  idFood: number | undefined;
  isNotValidCart: boolean;
  isRestaurant: boolean;
  cartBtnHandler: (item: IDataFood) => void;
  yesBtnCartHandler: (item: IDataFood) => void;
  noBtnCartHandler: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_API;

const ListDetailFood = ({
  item,
  idFood,
  isNotValidCart,
  isRestaurant,
  cartBtnHandler,
  yesBtnCartHandler,
  noBtnCartHandler,
}: Props) => {
  return (
    <>
      {isNotValidCart && item.foodId === idFood && (
        <Dialog open={isNotValidCart} modal={true}>
          <DialogContent
            className="flex flex-col items-start px-8"
            hideCloseButton={true}
          >
            {!isRestaurant && (
              <DialogTitle>Mau ganti resto ini aja?</DialogTitle>
            )}
            {isRestaurant && <DialogTitle>Gagal</DialogTitle>}
            {!isRestaurant && (
              <p>
                Boleh, kok. Tapi, menu yang kamu pilih dari resto sebelumnya
                kami hapus, ya.
              </p>
            )}

            {isRestaurant && (
              <p>
                Hehe, kamu tidak bisa menambahkan product kamu sendiri ke dalam
                cart
              </p>
            )}
            <div>
              {!isRestaurant && (
                <Button
                  onClick={() => yesBtnCartHandler(item)}
                  className="mr-2 rounded-full border-2 border-green-700 bg-white p-2 text-base text-green-700 hover:bg-green-200 md:mb-4 md:p-5 lg:text-lg"
                >
                  Iya, ganti
                </Button>
              )}
              {!isRestaurant && (
                <Button
                  onClick={() => noBtnCartHandler()}
                  className="rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                >
                  Gak jadi
                </Button>
              )}
              {isRestaurant && (
                <Button
                  onClick={() => noBtnCartHandler()}
                  className="rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                >
                  Oke
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
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
