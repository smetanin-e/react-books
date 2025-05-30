import React from 'react';
import styles from './alertPopup.module.scss';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSliceTemp';
import Button from '../Button';

function AlertPopup({ setPopup }) {
  const dispatch = useDispatch();
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
}

export default AlertPopup;
