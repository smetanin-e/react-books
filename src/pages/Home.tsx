import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { changeCategory } from '../redux/slices/categorySlice';
import { useAppDispatch } from '../redux/store';

import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
import Search from '../components/Header/Search';

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
      {isMobile && <Banner />}
      <div className='page__products products-page'>
        <Aside />

        <Tabs />
      </div>
    </>
  );
};

export default Home;
