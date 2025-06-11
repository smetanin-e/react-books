import arrow from '../../assets/img/slider/arrow.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate();
  const { books } = useSelector((state: RootState) => state.books);
  const slides = books.filter((item) => item.slider === true);
  return (
    <div className='baner-page__slider slider-page'>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: '.arrows-slider__arrow.-next',
          prevEl: '.arrows-slider__arrow.-prev',
        }}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 7000,
        // }}
      >
        {slides.map((item) => (
          <SwiperSlide
            onClick={() => navigate(`/bookPage/${item.id}`)}
            className='slider-page__item slide-item'
          >
            <div className='slide-item__bg'>
              <img className='image' src={item.imageUrl} alt='image1' />
            </div>
            <div className='slide-item__content'>
              <div className='slide-item__images'>
                <div className='slide-item__book'>
                  <img className='image' src={item.imageUrl} alt='image2' />
                </div>
                <div className='slide-item__audio'>
                  <img className='image' src={item.imageUrl} alt='image3' />
                </div>
              </div>

              <div className='slide-item__text'>
                <h2 className='slide-item__title'>{item.title}</h2>
                <p className='slide-item__author'>{item.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className='slider-page__arrows arrows-slider'>
          <div className='arrows-slider__arrow -prev'>
            <img src={arrow} alt='' />
          </div>
          <div className='arrows-slider__arrow -next'>
            <img src={arrow} alt='' />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
