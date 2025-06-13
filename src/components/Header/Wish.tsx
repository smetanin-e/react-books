import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

function Wish() {
  const countWish = useSelector((state: RootState) => state.books.wishItems.length);
  const wishItems = useSelector((state: RootState) => state.books.wishItems);

  React.useEffect(() => {
    const json = JSON.stringify(wishItems);
    localStorage.setItem('wish', json);
  }, [wishItems]);

  return (
    <Link to={'/wish'}>
      <div className='items-header__item wish'>
        {countWish > 0 && (
          <span className='count count_wish'>{countWish < 100 ? countWish : '99+'}</span>
        )}

        <svg width='25px' height='25px'>
          <path d='M12.500,-0.002 C5.596,-0.002 -0.002,5.596 -0.002,12.500 C-0.002,19.405 5.596,25.002 12.500,25.002 C19.405,25.002 25.002,19.405 25.002,12.500 C25.002,5.596 19.405,-0.002 12.500,-0.002 ZM17.025,19.453 L12.445,17.044 L7.865,19.453 L8.740,14.353 L5.034,10.741 L10.155,9.997 L12.445,5.357 L14.734,9.997 L19.855,10.741 L16.150,14.353 L17.025,19.453 Z'></path>
        </svg>
        <span className='items-header__item-name'>Желаемое</span>
      </div>
    </Link>
  );
}

export default Wish;
