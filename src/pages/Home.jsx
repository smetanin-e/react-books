import { useDispatch } from 'react-redux';
import { changeCategory } from '../redux/slices/categorySlice';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';

function Home() {
  const dispatch = useDispatch();
  //При переходе на главную страницу очищаем активную категорию
  dispatch(changeCategory(''));

  return (
    <>
      <div className='page__banner baner-page'>
        <Slider />
        <Banner />
      </div>
      <div className='page__products products-page'>
        <Aside />

        <Tabs />
      </div>
    </>
  );
}

export default Home;
