import React from 'react';

import Products from '../Products';
import TabsPreLoading from './TabsPreLoading';

function Tabs({ items, isLoading }) {
  //Список табов
  //const tabLinks = ['Best sellers', 'New Arrivals', 'Used Books', 'Special Offers'];

  /*Из всех обьектов книг фильтруем по наличию свойства tab и 
    создаем массив значений свойства "tab" отсекая повторяющиеся элементы */
  const tabLinks = Array.from(new Set(items.filter((obj) => obj.tab).map((obj) => obj.tab))).sort();
  console.log(tabLinks);

  //создаем состояние, в котором будем хранить активный таб
  const [activeTab, setActiveTab] = React.useState(tabLinks[0]);

  const tabItems = items.filter((obj) => obj.tab === activeTab);

  return (
    <>
      {isLoading ? (
        <TabsPreLoading />
      ) : (
        <div className='products-page__books tabs-page'>
          <ul className='tabs-page__list'>
            {tabLinks.map((tab) => (
              <li
                className={
                  tab === activeTab ? 'tabs-page__link --active-tab-nav' : 'tabs-page__link'
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          <div className='products-page__items content-tab'>
            <Products items={tabItems} />
            <div className='pagination'>
              <ul className='pagination__list'>
                <li className='current-page'>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
          </div>

          {/* <div className='products-page__items content-tab'>
            <div className='products'>
              {tabItems.map((obj) => (
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

            <div className='pagination'>
              <ul className='pagination__list'>
                <li className='current-page'>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}

export default Tabs;
