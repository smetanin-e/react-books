import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ItemBook } from '../../redux/slices/itemSlice';
import { onAddToCart } from '../../redux/slices/cartSlice';

import { RootState, useAppDispatch } from '../../redux/store';

import Button from '../Button';
import Pays from './Pays';

type BookInfoPriceProps = {
  book: ItemBook;
};
const BookInfoPrice = ({ book }: BookInfoPriceProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const checkInCart = cartItems.some((elem) => elem.id === book.id);

  const addToCart = (obj: ItemBook) => {
    const item = {
      id: obj.id,
      title: obj.title,
      author: obj.author,
      price: obj.price,
      imageUrl: obj.imageUrl,
    };
    dispatch(onAddToCart(item));
  };

  return (
    <div className='body-book-info__price price-book-info'>
      <div className='price-book-info__price'>
        <div className='price-book-info__item'>
          <p className='price-book-info__item-price'>
            Цена: <span>{book.price} ₽</span>
          </p>
          {book.sale && (
            <p className='price-book-info__sale-info'>
              Скидка {book.sale}%{' '}
              <span className='line-through'>
                {Math.ceil(book.price / (1 - book.sale / 100))} ₽
              </span>
            </p>
          )}
        </div>
        <div className='price-book-info__item'>
          {!checkInCart ? (
            <Button
              handleClick={() => addToCart(book)}
              styleClasses={'price-book-info__button btn btn_green'}
            >
              В корзину
            </Button>
          ) : (
            <Link to={'/cart'}>
              <Button styleClasses={'price-book-info__button btn btn_blue'}>К оформлению</Button>
            </Link>
          )}
        </div>
      </div>
      <Pays />
    </div>
  );
};

export default BookInfoPrice;
