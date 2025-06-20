import React from 'react';
import { useSelector } from 'react-redux';

import { addWish, ItemBook, onRemoveWish } from '../redux/slices/itemSlice';

import { RootState, useAppDispatch } from '../redux/store';

type IconWishProps = {
  item: ItemBook;
  outBookPage?: boolean;
};

const IconWish: React.FC<IconWishProps> = ({ item, outBookPage }) => {
  const dispatch = useAppDispatch();
  const wishItems = useSelector((state: RootState) => state.books.wishItems);
  const checkInWish = wishItems.some((elem) => elem.id === item.id);

  const addToWish = (obj: ItemBook) => {
    dispatch(addWish(obj));
  };
  const removeWish = (obj: ItemBook) => {
    dispatch(onRemoveWish(obj));
  };

  return (
    <div
      className={
        outBookPage
          ? checkInWish
            ? 'book-info__wish book-info__wish_main in-wish'
            : 'book-info__wish_main book-info__wish'
          : checkInWish
          ? 'book-info__wish in-wish'
          : 'book-info__wish'
      }
      onClick={() => (checkInWish ? removeWish(item) : addToWish(item))}
    >
      <svg width='25px' height='25px'>
        <path d='M12.500,-0.002 C5.596,-0.002 -0.002,5.596 -0.002,12.500 C-0.002,19.405 5.596,25.002 12.500,25.002 C19.405,25.002 25.002,19.405 25.002,12.500 C25.002,5.596 19.405,-0.002 12.500,-0.002 ZM17.025,19.453 L12.445,17.044 L7.865,19.453 L8.740,14.353 L5.034,10.741 L10.155,9.997 L12.445,5.357 L14.734,9.997 L19.855,10.741 L16.150,14.353 L17.025,19.453 Z'></path>
      </svg>
    </div>
  );
};

export default IconWish;
