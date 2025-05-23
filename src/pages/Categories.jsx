import React from 'react';
import axios from 'axios';
import Aside from '../components/Aside';
import Book from '../components/Book';

function Categories() {
  /* 
!Временный код
*/
  //создаем состояние для хранения загруженных книг из сервера
  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryActive, setCategoryActive] = React.useState('ВСЕ');
  //ссылка на массив объектов, содержащий книги
  const url = 'https://815c3fb7d56c4537.mokky.dev/books';

  //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении
  //не было нового рендера
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios
          .get(categoryActive === 'ВСЕ' ? url : `${url}?subCategory=${categoryActive}`)
          .then((response) => response.data);
        setItems(response);
      } catch (error) {
        console.log(error.message || 'Произошла ошибка');
      } finally {
        window.scrollTo(0, 0);
        setIsLoading(false);
      }
    };
    getData();
  }, [categoryActive]);

  /* 
!Временный код
*/

  return (
    <div class='page__products products-page'>
      <Aside
        items={items}
        isLoading={isLoading}
        valueCategory={categoryActive}
        onClickCategory={(cat) => setCategoryActive(cat)}
      />

      <div class='products-page__books '>
        <div class='products-page__items'>
          <h1 class='products-page__title'>{categoryActive}</h1>
          <div className='products'>
            {items.map((obj) => (
              <Book
                id={obj.id}
                title={obj.title}
                image={obj.imageUrl}
                sale={obj.sale}
                price={obj.price}
                onClick={() => alert(obj.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
