import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const countAdd = (count) => {
    dispatch(increment(count));
  };
  return (
    <div class='cart'>
      <div class='cart__header'>
        <h1 class='cart__title'>
          В корзине: <span>{cartItems.length}</span> шт.
        </h1>
        <button class='cart__clear'>Удалить все товары</button>
      </div>

      <div class='cart__items'>
        {cartItems.map((obj) => (
          <div class='cart__item item-cart'>
            <div class='item-cart__image'>
              <img class='image' src={obj.imageUrl} alt='' />
            </div>
            <div class='item-cart__description'>
              <h2 class='item-cart__title'>{obj.title}</h2>
              <p class='item-cart__author'>{obj.author}</p>
            </div>
            <div class='item-cart__counter counter-cart'>
              <div class='counter-cart__container'>
                <button class='counter-cart__button btn btn_green'>-</button>
                <span>{obj.count}</span>
                <button
                  onClick={() => {
                    countAdd(obj);
                  }}
                  class='counter-cart__button btn btn_green'
                >
                  +
                </button>
              </div>
            </div>
            <div class='item-cart__price'>
              <p class='item-cart__price-for-one'>{obj.price * obj.count} ₽</p>
              <p class='item-cart__price-total'>
                {obj.price} ₽ x {obj.count} шт.
              </p>
            </div>
            <div class='item-cart__buttons buttons-cart'>
              <div class='buttons-cart__container'>
                <button class='buttons-cart__remove'>
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
      <div class='total'>
        <p class='total__tota-count'>Товаров - 3</p>
        <p class='total__tota-price'>Сумма к оплате - 2503 ₽</p>
        <button class='total__send btn btn_green'>Оформить заказ</button>
      </div>
    </div>
  );
}

export default Cart;
