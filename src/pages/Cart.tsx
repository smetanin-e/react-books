import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement, removeCartItem } from '../redux/slices/cartSlice';
import Button from '../components/Button';
import AlertPopup from '../components/popups/AlertPopup';
import { RootState, useAppDispatch } from '../redux/store';

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const countPlus = (count: { id: number }) => {
    dispatch(increment(count));
  };

  const countMinus = (count: { id: number }) => {
    dispatch(decrement(count));
  };

  const removeItem = (id: { id: number }) => {
    dispatch(removeCartItem(id));
  };

  const [popup, setPopup] = React.useState(false);

  const oneItem = totalCount % 10 === 1 && totalCount % 100 !== 11;
  const someItems =
    totalCount % 10 >= 2 &&
    totalCount % 10 <= 4 &&
    (totalCount % 100 < 12 || totalCount % 100 > 14);
  return (
    <>
      {popup && <AlertPopup setPopup={setPopup} />}

      <div className='cart'>
        <div className='cart__header'>
          <h1 className='cart__title'>
            Корзина,{' '}
            <span>
              {totalCount}
              {oneItem ? ' товар' : someItems ? ' товара' : ' товаров'}
            </span>
          </h1>
          <button onClick={() => setPopup(true)} className='cart__clear'>
            Удалить все товары
          </button>
        </div>

        <div className='cart__items'>
          {cartItems.map((obj) => (
            <div key={obj.id} className='cart__item item-cart'>
              <div className='item-cart__image'>
                <img className='image' src={obj.imageUrl} alt='' />
              </div>
              <div className='item-cart__description'>
                <h2 onClick={() => alert(obj.title)} className='item-cart__title'>
                  {obj.title}
                </h2>
                <p className='item-cart__author'>{obj.author}</p>
              </div>
              <div className='item-cart__counter counter-cart'>
                <div className='counter-cart__container'>
                  <Button
                    handleClick={() => {
                      countMinus(obj);
                    }}
                    styleClasses={'counter-cart__button btn btn_green'}
                    disabled={obj.count ? obj.count < 2 : false}
                  >
                    -
                  </Button>

                  <span>{obj.count}</span>
                  <button
                    onClick={() => {
                      countPlus(obj);
                    }}
                    className='counter-cart__button btn btn_green'
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='item-cart__price'>
                <p className='item-cart__price-for-one'>{obj.price * (obj.count || 1)} ₽</p>
                <p className='item-cart__price-total'>
                  {obj.count} шт. x {obj.price} ₽
                </p>
              </div>
              <div className='item-cart__buttons buttons-cart'>
                <div className='buttons-cart__container'>
                  <button onClick={() => removeItem(obj)} className='buttons-cart__remove'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                      <path d='M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z' />
                    </svg>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='total'>
          <p className='total__total-count'>Товары, {totalCount} шт.</p>
          <p className='total__total-price'>Итого - {totalPrice.toString()} ₽</p>
          <button className='total__send btn btn_green'>Оформить заказ</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
