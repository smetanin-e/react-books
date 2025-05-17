import posterBg from '../assets/img/baner/poster-bg.png';
import posterBook from '../assets/img/baner/poster-book.jpg';

function Banner({ bestSale }) {
  console.log(bestSale);

  return (
    <div className='baner-page__banner banner'>
      <div className='banner__bg'>
        <img src={posterBg} alt='' className='image' />
      </div>
      <h3 className='banner__title'>Предложение месяца</h3>
      <p className='banner__subtitle'>{bestSale.title}</p>
      <div className='banner__image'>
        <img className='image' src={bestSale.imageUrl} alt='image5' />
      </div>
      <p className='banner__sale'>Сохрани {bestSale.sale}% сейчас</p>
      <p className='banner__price'>{bestSale.price} ₽</p>

      <button className='banner__button btn btn_green'>Купить</button>
    </div>
  );
}

export default Banner;
