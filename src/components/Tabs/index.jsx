import React from 'react';

import Products from '../Products';
import Pagination from '../Pagination';
//import TabsPreLoading from './TabsPreLoading';
import { useSelector } from 'react-redux';
function Tabs() {
  //Список табов
  const tabLinks = ['Бестселлеры', 'Новинки', 'Подержанные ', 'Спец. предложение'];

  /*Из всех обьектов книг фильтруем по наличию свойства tab и 
    создаем массив значений свойства "tab" отсекая повторяющиеся элементы */
  //const tabLinks = Array.from(new Set(items.filter((obj) => obj.tab).map((obj) => obj.tab))).sort();

  //создаем состояние, в котором будем хранить активный таб
  const [activeTab, setActiveTab] = React.useState(0);
  const { books } = useSelector((state) => state.books);
  const tabItems = books.filter((obj) => obj.tab === tabLinks[activeTab]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  //pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = tabItems.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (PageNumber) => setCurrentPage(PageNumber);

  return (
    <div className='products-page__books tabs-page'>
      <ul className='tabs-page__list'>
        {tabLinks.map((tab, i) => (
          <li
            key={tab[i]}
            className={i === activeTab ? 'tabs-page__link --active-tab-nav' : 'tabs-page__link'}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className='products-page__items content-tab'>
        <Products items={currentItems} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={tabItems.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Tabs;
