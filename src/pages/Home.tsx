/* eslint-disable react-hooks/exhaustive-deps */
import { changeCategory } from '../redux/slices/categorySlice';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
import { useAppDispatch } from '../redux/store';
import React from 'react';
import Search from '../components/Header/Search';

import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 860px)' });
  const dispatch = useAppDispatch();
  //При переходе на главную страницу очищаем активную категорию
  React.useEffect(() => {
    dispatch(changeCategory(''));
  }, []);

  return (
    <>
      {isMobile && <Search />}

      <div className='page__banner baner-page'>
        <Slider />
        {!isMobile && <Banner />}
      </div>
      <div className='page__products products-page'>
        {/* <Aside /> */}

        <Tabs />
      </div>
      {isMobile && <Banner />}
    </>
  );
};

export default Home;
