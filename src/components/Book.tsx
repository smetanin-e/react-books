import { Link } from 'react-router-dom';
import IconWish from './IconWish';

import { ItemBook } from '../redux/slices/itemSlice';
const Book = (obj: ItemBook) => {
  return (
    <>
      <div className='products__item item-product'>
        <IconWish item={obj} outBookPage={true} />
        <Link key={obj.id} to={`/bookPage/${obj.id}`}>
          {obj.sale ? (
            <div className='item-product__sale'>
              <p>{obj.sale}%</p>
              <span>скидка</span>
            </div>
          ) : null}

          <div className='item-product__image'>
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
