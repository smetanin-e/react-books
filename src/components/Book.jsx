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
