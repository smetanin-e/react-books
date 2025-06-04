import React from 'react';
import { addWish, onRemoveWish } from '../redux/slices/itemSlice';
import { useSelector, useDispatch } from 'react-redux';
function IconWish({ item, outBookPage }) {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.books.wishItems);

  //const currentBook = useSelector((state) => state.books.item);
  const checkInWish = wishItems.some((elem) => elem.id === item.id);
  const addToWish = (obj) => {
    dispatch(addWish(obj));
  };
  const removeWish = (obj) => {
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
}

export default IconWish;
