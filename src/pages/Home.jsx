import React from 'react';

import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
import Skeleton from '../components/Skeleton';

function Home() {
  //создаем состояние для хранения загруженных книг из сервера
  const [items, setItems] = React.useState([
    {
      id: '0',
      imageUrl:
        'https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/23997456-elena-valerevna-motova-moy-luchshiy-drug-zheludok-eda-dlya-umnyh-ludey.webp',
      title: 'Мой лучший друг – желудок.',
      author: 'Елена Мотова',
      description:
        'Как работают желудок, печень и кишечник? Одинаково ли мы чувствуем вкус? Перед вами – новый формат книги о питании. Вы узнаете не только о пищеварении и обмене веществ, но и о том, как мозг и гормоны регулируют вес. Каким образом формируются пищевые привычки, почему люди толстеют после диет и зачем нам нужны разные питательные вещества – на эти и другие вопросы отвечает наука о питании.',
      price: '400',
      sale: 10,
      category: 'Хобби, досуг',
      subCategory: 'Кулинария',
      tab: 'Новинки',
    },
  ]);

  const [isLoading, setIsLoading] = React.useState(true);

  //Функция для упрощения формирования запросов запросов

  /* const getData = (url) =>
        new Promise((resolve,reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
        )*/

  const getData = async (url) => {
    setIsLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    setIsLoading(false);
    return json;
  };

  //ссылка на массив объектов, содержащий книги
  const url = 'https://815c3fb7d56c4537.mokky.dev/books';

  const [bannerItem, setBannerItem] = React.useState({});

  //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении
  //не было нового рендера
  React.useEffect(() => {
    //вызываем функцию и прердаем ссылку для получения данных с сервера
    getData(url)
      .then((data) => {
        setItems(data);
        setBannerItem(
          data
            .filter((obj) => obj.sale)
            .reduce((prev, cur) => (+cur.sale > +prev.sale ? cur : prev)),
        );
      })
      .catch((error) => console.log(error.message));

    //фильтрую все книги, которые имеют скидку, затем нахожу объект с максимальной скидкой
  }, []);

  return (
    <>
      <div className='page__banner baner-page'>
        <Slider />
        {bannerItem.id ? <Banner bestSale={bannerItem} /> : <div>загрузка</div>}
      </div>

      <div className='page__products products-page'>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <Aside items={items} />
            <Tabs items={items} />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
