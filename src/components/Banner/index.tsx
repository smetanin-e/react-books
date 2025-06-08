import posterBg from '../../assets/img/baner/poster-bg.png';

import { useSelector } from 'react-redux';
import BannerPreLoading from './BannerPreLoading';
import { RootState } from '../../redux/store';

const Banner = () => {
  const { banner, status } = useSelector((state: RootState) => state.books);
  return (
    <>
      {status === 'loading' || banner === null ? (
        <BannerPreLoading />
      ) : (
        <div className='baner-page__banner banner'>
          <div className='banner__bg'>
            <img src={posterBg} alt='' className='image' />
          </div>
          <h3 className='banner__title'>Предложение месяца</h3>
          <p className='banner__subtitle'>{banner.title}</p>
          <div className='banner__image'>
            <img className='image' src={banner.imageUrl} alt='image5' />
          </div>
          <p className='banner__sale'>Сохрани {banner.sale}% сейчас</p>
          <p className='banner__price'>{banner.price} ₽</p>

          <button className='banner__button btn btn_green'>Купить</button>
        </div>
      )}
    </>
  );
};

export default Banner;
