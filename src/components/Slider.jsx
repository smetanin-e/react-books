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
 }

function Slider() {
  return (
    

    <div className="baner-page__slider slider-page">
        <div className="slider-page__wrapper">
            
            <div className="slider-page__item slide-item">
                <div className="slide-item__bg">
                    <img className="image" src={bgSlider} alt="image1"/>
                </div>
                <div className="slide-item__content">
                    <div className="slide-item__book">
                        <img className="image" src={bookImg} alt="image2"/>
                    </div>
                    <div className="slide-item__audio">
                        <img className="image" src={slideDisk} alt="image3"/>
                    </div>
                    <div className="slide-item__text">
                        <h2 className="slide-item__title">A Wanted Man</h2>
                        <p className="slide-item__subtitle">(Jack Reacher #17)</p>
                        <p className="slide-item__author">By Lee Child</p>
                    </div>                   
                </div>
            </div>
           
            
            
            <div className="slider-page__arrows arrows-slider">
                                    <div className="arrows-slider__arrow -prev">
                                      <img src={arrow} alt="" />
                                    </div>
                                    <div className="arrows-slider__arrow -next">
                                      <img src={arrow} alt="" />
                                    </div>
            </div>
        </div>
    </div>
   
    
  )
}

export default Slider