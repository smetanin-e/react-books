import { changeCategory } from '../redux/slices/categorySlice';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
import { useAppDispatch } from '../redux/store';

function Home() {
  const dispatch = useAppDispatch();
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
