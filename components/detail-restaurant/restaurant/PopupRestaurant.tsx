import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { IDataFood } from '@/model/foodModel';

interface Props {
  isNotValidCart: boolean;
  isRestaurant: boolean;
  item: IDataFood;
  yesBtnCartHandler: (item: IDataFood) => void;
  noBtnCartHandler: () => void;
}
const PopupRestaurant = ({
  isNotValidCart,
  isRestaurant,
  item,
  yesBtnCartHandler,
  noBtnCartHandler,
}: Props) => {
  return (
    <>
      {isNotValidCart && (
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
    </>
  );
};

export default PopupRestaurant;
