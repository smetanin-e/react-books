import React from 'react';

import { Link } from 'react-router-dom';
import IconWish from './IconWish';

const Book = (obj) => {
  return (
    <>
      <div className='products__item item-product'>
        <IconWish item={obj} outBookPage={true} />
        <Link key={obj.id} to={'/bookPage'}>
          {obj.sale ? (
            <div className='item-product__sale'>
              <p>{obj.sale}%</p>
              <span>off</span>
            </div>
          ) : null}

          <div className='item-product__image' onClick={obj.onClick}>
            <img src={obj.imageUrl} alt='' />
          </div>
          <h2 className='item-product__title'>
            {obj.title.length > 20 ? obj.title.slice(0, 20) + '...' : obj.title}
          </h2>
          <p className='item-product__price'>{obj.price + ' ₽'}</p>
        </Link>
      </div>
    </>
  );
};

export default Book;

/**
 * 
 *  <ContentLoader 
    speed={2}
    width={1000}
    height={1000}
    viewBox="0 0 1000 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="203" y="33" rx="0" ry="0" width="72" height="105" /> 
    <rect x="204" y="145" rx="0" ry="0" width="70" height="17" /> 
    <rect x="223" y="167" rx="0" ry="0" width="36" height="16" />
  </ContentLoader>
 */
