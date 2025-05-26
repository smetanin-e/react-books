import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, isItSubCategory } from '../redux/slices/categorySlice';
import { Link } from 'react-router-dom';
function BookPage() {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.currentItem.item);

  const setCategoryActive = (item) => {
    dispatch(changeCategory(item));
  };
  const setIsItSubCategory = (bool) => {
    dispatch(isItSubCategory(bool));
  };

  const [inWish, setInWish] = React.useState(false);
  const toggleWish = () => {
    setInWish(!inWish);
  };

  console.log(currentBook);
  return (
    <>
      <div className='breadcrumds'>
        <nav>
          <ul className='breadcrumds__list'>
            <li>
              <Link to={'/'}>Главная</Link>
            </li>

            <li>
              <Link
                onClick={() => {
                  setCategoryActive(currentBook.category);
                  setIsItSubCategory(false);
                }}
                to={'/categories'}
              >
                {currentBook.category}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setCategoryActive(currentBook.subCategory);
                  setIsItSubCategory(true);
                }}
                to={'/categories'}
              >
                {currentBook.subCategory}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='book-info'>
        <div
          onClick={toggleWish}
          className={inWish ? 'book-info__wish in-wish' : 'book-info__wish'}
        >
          <svg width='25px' height='25px'>
            <path d='M12.500,-0.002 C5.596,-0.002 -0.002,5.596 -0.002,12.500 C-0.002,19.405 5.596,25.002 12.500,25.002 C19.405,25.002 25.002,19.405 25.002,12.500 C25.002,5.596 19.405,-0.002 12.500,-0.002 ZM17.025,19.453 L12.445,17.044 L7.865,19.453 L8.740,14.353 L5.034,10.741 L10.155,9.997 L12.445,5.357 L14.734,9.997 L19.855,10.741 L16.150,14.353 L17.025,19.453 Z'></path>
          </svg>
        </div>
        <div className='book-info__image'>
          <img className='image' src={currentBook.imageUrl} alt='book' />
        </div>
        <div className='book-info__body body-book-info'>
          <h1 className='body-book-info__title'>{currentBook.title}</h1>
          <p className='body-book-info__text'>{currentBook.description}</p>
          <div className='body-book-info__price price-book-info'>
            <div className='price-book-info__price'>
              <div className='price-book-info__item'>
                <p className='price-book-info__item-price'>
                  Цена: <span>{currentBook.price} ₽</span>
                </p>
                {currentBook.sale && (
                  <p className='price-book-info__sale-info'>
                    Скидка {currentBook.sale}% <span className='line-through'>200 ₽</span>
                  </p>
                )}
              </div>
              <div className='price-book-info__item'>
                <button className='price-book-info__button btn btn_green'>В корзину</button>
              </div>
            </div>
            <div className='price-book-info__pay'>
              <p className='price-book-info__pay-scure'>Безопасные платежи</p>

              <ul className='price-book-info__pay-list'>
                <li>
                  <img
                    src='https://kanistra-shop.ru/local/templates/kanistra/img/design/sbp-logo.png'
                    alt='image111'
                  />
                </li>

                <li>
                  <img
                    src='https://stropy-yuga.ru/image/catalog/stropy/Karta%20Mir.png'
                    alt='image111'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
