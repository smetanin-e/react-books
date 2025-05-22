import React from 'react';

const Book = (props) => {
  return (
    <div className='products__item item-product'>
      {props.sale ? (
        <div className='item-product__sale'>
          <p>{props.sale}%</p>
          <span>off</span>
        </div>
      ) : null}

      <div className='item-product__image' onClick={props.onClick}>
        <img src={props.image} alt='' />
      </div>
      <h2 className='item-product__title'>
        {props.title.length > 20 ? props.title.slice(0, 20) + '...' : props.title}
      </h2>
      <p className='item-product__price'>{props.price + ' ₽'}</p>
    </div>
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
