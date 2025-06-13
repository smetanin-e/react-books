import React from 'react';
import { useSelector } from 'react-redux';
import CartPopup from '../components/popups/CartPopup';
import { RootState } from '../redux/store';
import Empty from '../components/Empty';
import emptyCartImage from '../assets/img/empty-cart.webp';
import CartProduct from '../components/Cart/CartProduct';
import CartTitle from '../components/Cart/CartTitle';
import Popup from '../components/popups/Popup';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const [popupClearCart, setPopupClearCart] = React.useState(false);
  const [popupOrder, setPopupOrder] = React.useState(false);
  return (
    <>
      {cartItems.length === 0 ? (
        <Empty title={'В вашей корзине нет товаров'} image={emptyCartImage} />
      ) : (
        <>
          {popupClearCart && <CartPopup setPopup={setPopupClearCart} />}
          {popupOrder && <Popup setPopup={setPopupOrder} />}
          <div className='cart'>
            <CartTitle totalCount={totalCount} setPopup={setPopupClearCart} />

            <div className='cart__items'>
              {cartItems.map((obj) => (
                <CartProduct key={obj.id} item={obj} />
              ))}
            </div>
            <div className='total'>
              <p className='total__total-count'>Товары, {totalCount} шт.</p>
              <p className='total__total-price'>Итого - {totalPrice.toString()} ₽</p>
              <button onClick={() => setPopupOrder(true)} className='total__send btn btn_green'>
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
