import React from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../redux/slices/categorySlice';

function Home() {
  const dispatch = useDispatch();

  //При переходе на главную страницу очищаем активную категорию
  dispatch(changeCategory(''));

  const [isLoading, setIsLoading] = React.useState(true);

  //создаем состояние для хранения загруженных книг из БД
  const [items, setItems] = React.useState([]);

  //создаем состояние для хранения книги для баннера
  const [bestOffer, setBestOffer] = React.useState({});

  //ссылка на массив объектов, содержащий книги
  const url = 'https://815c3fb7d56c4537.mokky.dev/books';

  //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении
  //не было нового рендера
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url).then((response) => response.data);
        setItems(response);
        setIsLoading(false);
        //Ищем книгу с максимальной скидкой и передаем ее в баннер
        setBestOffer(
          response
            .filter((obj) => obj.sale)
            .reduce((prev, cur) => (+cur.sale > +prev.sale ? cur : prev)),
        );
      } catch (error) {
        console.log(error.message || 'Произошла ошибка');
      } finally {
        window.scrollTo(0, 0);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className='page__banner baner-page'>
        <Slider />
        <Banner isLoading={isLoading} bestOffer={bestOffer} />
      </div>
      <div className='page__products products-page'>
        <Aside isLoading={isLoading} setIsLoading={setIsLoading} />

        {isLoading ? <div>loading</div> : <Tabs items={items} />}
      </div>
    </>
  );
}

export default Home;
