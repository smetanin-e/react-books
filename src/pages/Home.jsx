import React from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
//import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  //создаем состояние для хранения загруженных книг из сервера
  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
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
        setIsLoading(false);
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
      {!isLoading && (
        <Link to={'/categories'}>
          <button className='btn btn_green'>Категории</button>
        </Link>
      )}

      <div className='page__products products-page'>
        <Aside items={items} isLoading={isLoading} />

        <Tabs items={items} isLoading={isLoading} />
      </div>
    </>
  );
}

export default Home;
