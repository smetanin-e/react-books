import React from 'react';
import arrow from '../../assets/img/arrow.png';
type AsideHeaderProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
const AsideHeader = ({ open, setOpen }: AsideHeaderProps) => {
  const toggleOpenCategories = () => {
    setOpen(!open);
  };

  return (
    <div className='categories__header'>
      <h2 className='categories__title'>Категории</h2>
      <button onClick={toggleOpenCategories} className='categories__button'>
        <img
          src={arrow}
          alt='arrow'
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </button>
    </div>
  );
};

export default AsideHeader;
