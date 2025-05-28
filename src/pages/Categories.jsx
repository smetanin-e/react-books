import React from 'react';
import axios from 'axios';
import Aside from '../components/Aside';
import Products from '../components/Products';

import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';

function Categories() {
  //создаем состояние для хранения загруженных книг из сервера
  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const activeCategory = useSelector((state) => state.category.curentCategory);
  const itSubCategory = useSelector((state) => state.category.itSubCategory);

  //ссылка на массив объектов, содержащий книги
  const url =
    activeCategory === 'ВСЕ'
      ? 'https://815c3fb7d56c4537.mokky.dev/books'
      : itSubCategory
      ? `https://815c3fb7d56c4537.mokky.dev/books?subCategory=${activeCategory}`
      : `https://815c3fb7d56c4537.mokky.dev/books?category=${activeCategory}`;

  //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении
  //не было нового рендера
  React.useEffect(() => {
    console.log('Компонент создан');
    const getData = async () => {
      try {
        const response = await axios.get(url).then((response) => response.data);
        setItems(response);
      } catch (error) {
        console.log(error.message || 'Произошла ошибка');
      } finally {
        window.scrollTo(0, 0);
        setIsLoading(false);
      }
    };
    getData();
  }, [activeCategory, url]);
  console.log(activeCategory);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  //pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber) => setCurrentPage(PageNumber);

  return (
    <div class='page__products products-page'>
      <Aside isLoading={isLoading} setIsLoading={setIsLoading} />

      <div class='products-page__books '>
        <div class='products-page__items'>
          <h1 class='products-page__title'>{activeCategory}</h1>
          <Products items={currentItems} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={items.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
