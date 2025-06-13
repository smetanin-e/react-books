import styles from './alertPopup.module.scss';

import React from 'react';

import { clearCart } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';

import Button from '../Button';

type CartPopupProps = {
  setPopup: (value: boolean) => void;
};

const CartPopup = ({ setPopup }: CartPopupProps) => {
  const dispatch = useAppDispatch();
  const onClearCart = () => {
    dispatch(clearCart());
    setPopup(false);
  };

  React.useEffect(() => {
    // Запретить скролл на body
    document.body.style.overflow = 'hidden';

    // Восстановить скролл при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Очистить корзину?</div>
        <div className={styles.buttons}>
          <Button styleClasses={'btn btn_green'} handleClick={onClearCart}>
            да
          </Button>
          <Button styleClasses={'btn btn_green'} handleClick={() => setPopup(false)}>
            отмена
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
