import React from 'react';
import axios from 'axios';

import posterBg from '../../assets/img/baner/poster-bg.png';

import BannerPreLoaading from './BannerPreLoaading';

function Banner({ isLoading }) {
  const [bestOffer, setBestOffer] = React.useState({});

  React.useEffect(() => {
    axios.get('https://815c3fb7d56c4537.mokky.dev/books').then((response) =>
      setBestOffer(
        //фильтрую все книги, которые имеют скидку, затем нахожу объект с максимальной скидкой
        response.data
          .filter((obj) => obj.sale)
          .reduce((prev, cur) => (+cur.sale > +prev.sale ? cur : prev)),
      ),
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <BannerPreLoaading />
      ) : (
        <div className='baner-page__banner banner'>
          <div className='banner__bg'>
            <img src={posterBg} alt='' className='image' />
          </div>
          <h3 className='banner__title'>Предложение месяца</h3>
          <p className='banner__subtitle'>{bestOffer.title}</p>
          <div className='banner__image'>
            <img className='image' src={bestOffer.imageUrl} alt='image5' />
          </div>
          <p className='banner__sale'>Сохрани {bestOffer.sale}% сейчас</p>
          <p className='banner__price'>{bestOffer.price} ₽</p>

          <button className='banner__button btn btn_green'>Купить</button>
        </div>
      )}
    </>
  );
}

export default Banner;
