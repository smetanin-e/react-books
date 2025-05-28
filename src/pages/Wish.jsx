import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../components/Products';

const Wish = () => {
  const wishItems = useSelector((state) => state.currentItem.wishItems);
  return (
    <div>
      <h1 className='body-book-info__title'>Твой список желаемых книг:</h1>
      {wishItems.length > 0 && <Products items={wishItems} />}
    </div>
  );
};

export default Wish;
