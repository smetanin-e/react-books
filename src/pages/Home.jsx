import React from 'react';
import ContentLoader from 'react-content-loader';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';
import Aside from '../components/Aside';

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

  //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении
  //не было нового рендера
  React.useEffect(() => {
    //вызываем функцию и прердаем ссылку для получения данных с сервера
    getData(url)
      .then((data) => setItems(data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(items);

  //фильтрую все книги, которые имеют скидку, затем нахожу объект с максимальной скидкой
  const bannerItem = items
    .filter((obj) => obj.sale)
    .reduce((prev, cur) => (+cur.sale > +prev.sale ? cur : prev));
  console.log(bannerItem);

  return (
    <div className='wrapper'>
      <Header />

      <main className='page'>
        <div className='page__container'>
          <div className='page__banner baner-page'>
            <Slider />
            <Banner bestSale={bannerItem && bannerItem} />
          </div>

          <div className='page__products products-page'>
            {isLoading ? (
              <>
                <ContentLoader
                  speed={2}
                  width={1000}
                  height={1000}
                  viewBox='0 0 1000 1000'
                  backgroundColor='#f3f3f3'
                  foregroundColor='#ecebeb'
                >
                  <rect x='0' y='0' rx='0' ry='0' width='188' height='600' />
                  <rect x='205' y='0' rx='0' ry='0' width='600' height='42' />

                  <rect x='205' y='60' rx='0' ry='0' width='100' height='150' />
                  <rect x='205' y='220' rx='0' ry='0' width='100' height='30' />
                  <rect x='220' y='260' rx='0' ry='0' width='70' height='25' />

                  <rect x='355' y='60' rx='0' ry='0' width='100' height='150' />
                  <rect x='355' y='220' rx='0' ry='0' width='100' height='30' />
                  <rect x='370' y='260' rx='0' ry='0' width='70' height='25' />

                  <rect x='505' y='60' rx='0' ry='0' width='100' height='150' />
                  <rect x='505' y='220' rx='0' ry='0' width='100' height='30' />
                  <rect x='520' y='260' rx='0' ry='0' width='70' height='25' />

                  <rect x='655' y='60' rx='0' ry='0' width='100' height='150' />
                  <rect x='655' y='220' rx='0' ry='0' width='100' height='30' />
                  <rect x='670' y='260' rx='0' ry='0' width='70' height='25' />

                  <rect x='805' y='60' rx='0' ry='0' width='100' height='150' />
                  <rect x='805' y='220' rx='0' ry='0' width='100' height='30' />
                  <rect x='820' y='260' rx='0' ry='0' width='70' height='25' />
                </ContentLoader>
              </>
            ) : (
              <>
                <Aside items={items} />
                <Tabs items={items} />
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
