import bgSlider from '../assets/img/slider/slide1.jpg';
import bookImg from '../assets/img/slider/slide1-book.jpg';
import slideDisk from '../assets/img/slider/slide1-disk.png';
import arrow from '../assets/img/slider/arrow.png';

import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation } from 'swiper/modules';
import 'swiper/css';

const params = {
  containerClass: 'slider-page',
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
};

function Slider() {
  return (
    <div className='baner-page__slider slider-page'>
      <div className='slider-page__wrapper'>
        <div className='slider-page__item slide-item'>
          <div className='slide-item__bg'>
            <img
              className='image'
              src='https://rust.litnet.com/uploads/covers/0/1749455884_20.jpg'
              alt='image1'
            />
          </div>
          <div className='slide-item__content'>
            <div className='slide-item__images'>
              <div className='slide-item__book'>
                <img
                  className='image'
                  src='https://rust.litnet.com/uploads/covers/0/1749455884_20.jpg'
                  alt='image2'
                />
              </div>
              <div className='slide-item__audio'>
                <img
                  className='image'
                  src='https://rust.litnet.com/uploads/covers/0/1749455884_20.jpg'
                  alt='image3'
                />
              </div>
            </div>

            <div className='slide-item__text'>
              <h2 className='slide-item__title'>Сначала суп, потом десерт</h2>
              <p className='slide-item__subtitle'>
                Мария Кардакова, нутрициолог и мама двоих детей...
              </p>
              <p className='slide-item__author'>Мария Кардакова</p>
            </div>
          </div>
        </div>

        <div className='slider-page__arrows arrows-slider'>
          <div className='arrows-slider__arrow -prev'>
            <img src={arrow} alt='' />
          </div>
          <div className='arrows-slider__arrow -next'>
            <img src={arrow} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
