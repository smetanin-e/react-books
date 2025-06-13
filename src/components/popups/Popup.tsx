import React from 'react';
import styles from './alertPopup.module.scss';
import Button from '../Button';

type PopupProps = {
  setPopup: (value: boolean) => void;
};

const Popup = ({ setPopup }: PopupProps) => {
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
        <div className={styles.title}>Данный функционал находится в стадии разработки</div>
        <div className={styles.buttons}>
          <Button styleClasses={'btn btn_green'} handleClick={() => setPopup(false)}>
            Ок
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
