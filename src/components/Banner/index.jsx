import posterBg from '../../assets/img/baner/poster-bg.png';

import BannerPreLoading from './BannerPreLoading';

function Banner({ isLoading, bestOffer }) {
  return (
    <>
      {isLoading ? (
        <BannerPreLoading />
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
