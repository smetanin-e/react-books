import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, isItSubCategory } from '../redux/slices/categorySlice';
import { Link } from 'react-router-dom';
import IconWish from '../components/IconWish';
function BookPage() {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.currentItem.item);

  const setCategoryActive = (item) => {
    dispatch(changeCategory(item));
  };
  const setIsItSubCategory = (bool) => {
    dispatch(isItSubCategory(bool));
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
        <IconWish item={currentBook} />

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
                    Скидка {currentBook.sale}%{' '}
                    <span className='line-through'>
                      {Math.ceil(currentBook.price / (1 - currentBook.sale / 100))} ₽
                    </span>
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
