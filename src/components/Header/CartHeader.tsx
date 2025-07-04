import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

const CartHeader = () => {
  const { items, totalCount } = useSelector((state: RootState) => state.cart);

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('cart', json);
  }, [items]);

  return (
    <Link to={'/cart'}>
      <div className='items-header__item cart'>
        {totalCount > 0 && <span className='count'>{totalCount < 100 ? totalCount : '99+'}</span>}

        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
          id='Capa_1'
          x='0px'
          y='0px'
          width='25px'
          height='25px'
          viewBox='0 0 510 510'
          xmlSpace='preserve'
        >
          <g id='shopping-cart'>
            <path d='M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306    c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7    c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408    c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z' />
          </g>
        </svg>
        <span className='items-header__item-name'>Корзина</span>
      </div>
    </Link>
  );
};

export default CartHeader;
