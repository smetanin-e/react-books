import React from 'react';
import { useSelector } from 'react-redux';
import Items from '../components/Items/Index';
import { RootState } from '../redux/store';

const Wish = () => {
  const wishItems = useSelector((state: RootState) => state.books.wishItems);
  return (
    <div>
      <h1 className='body-book-info__title'>Твой список желаемых книг:</h1>
      {wishItems.length > 0 && <Items items={wishItems} />}
    </div>
  );
};

export default Wish;
