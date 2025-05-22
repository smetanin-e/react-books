import React from 'react';

import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Aside from '../components/Aside';
import Skeleton from '../components/Skeleton';
import axios from 'axios';

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

  //ссылка на массив объектов, содержащий книги
  const url = 'https://815c3fb7d56c4537.mokky.dev/books';

  //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении
  //не было нового рендера
  React.useEffect(() => {
    axios.get(url).then((response) => setItems(response.data));
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className='page__banner baner-page'>
        <Slider />
        <Banner isLoading={isLoading} />
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
