import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { pagination } from '../utils/pagination';

import Items from './Items';
import Pagination from './Pagination';

const Tabs = () => {
  //Список табов
  const tabLinks = ['Бестселлеры', 'Новинки', 'Подержанные ', 'Спец. предложение'];

  /*Из всех обьектов книг фильтруем по наличию свойства tab и 
    создаем массив значений свойства "tab" отсекая повторяющиеся элементы */
  //const tabLinks = Array.from(new Set(items.filter((obj) => obj.tab).map((obj) => obj.tab))).sort();

  //создаем состояние, в котором будем хранить активный таб
  const [activeTab, setActiveTab] = React.useState(0);
  const { books } = useSelector((state: RootState) => state.books);
  const tabItems = books.filter((obj) => obj.tab === tabLinks[activeTab]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  //pagination
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postsPerPage] = React.useState(15);
  const currentItems = pagination(tabItems, currentPage, postsPerPage);
  const paginate = (PageNumber: number) => setCurrentPage(PageNumber);
  const tabsPage = React.useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    if (tabsPage.current) {
      tabsPage.current.scrollIntoView({ block: 'start' });
      setTimeout(() => {
        window.scrollBy({
          top: -130,
          behavior: 'smooth',
        });
      }, 0);
    }
  };

  return (
    <div ref={tabsPage} className='products-page__books tabs-page'>
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
        <Items items={currentItems} />

        <Pagination
          scrollToRef={scrollToRef}
          postsPerPage={postsPerPage}
          totalPosts={tabItems.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Tabs;
