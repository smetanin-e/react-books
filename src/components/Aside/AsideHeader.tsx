import React from 'react';
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
        =
      </button>
    </div>
  );
};

export default AsideHeader;
