import React from 'react';
import AsidePreLoading from './AsidePreLoading';

function Aside({ items, isLoading }) {
  //создаем функцию, которая принимает в качестве аргументов массив объектов с книгами,
  //название категории и название подкатегории
  const categoriesFromObject = (arr, cat, subCat) => {
    let result = { ВСЕ: [] };

    //создаем объект, свойствами которого будут названия категорий. Значения свойств пустой массив
    const categoryKeys = arr
      .map((obj) => obj[cat])
      .reduce((accumulator, value) => {
        return { ...accumulator, [value]: '[]' };
      }, {});

    //в цикле проходим по объекту.
    //если текущий элемент массива объектов с книгами содержит название категории
    //который равен названию нашего свойства
    //мы создаем массив подкатегорий и в результирующий массив добавляем
    //текущий ключ со значением массива подкатегорий с исключением повторяющихся элементов
    for (let key in categoryKeys) {
      const subs = arr
        .filter((item) => item[cat] === key) //получаем массив объектов у котовых ключ равен "cat"
        .map((item) => item[subCat]); //получаем массив подкатегорий, которые относятся к категории "cat"
      result[key] = [...new Set(subs)]; //в результирующий массив добавляем свойство "cat" со значением массив уникальных подкатегорий
    }

    return result;
  };

  const categories = categoriesFromObject(items, 'category', 'subCategory');

  const categoryTitles = Object.keys(categories);

  const [activeCategory, setActiveCategory] = React.useState('');

  return (
    <aside className='products-page__categories categories'>
      {isLoading ? (
        <AsidePreLoading />
      ) : (
        <>
          <h2 className='categories__title'>Категории</h2>
          {categoryTitles.map((value, index) => (
            <div className='categories__item item-category'>
              <h3
                onClick={() => setActiveCategory(value)}
                className={
                  activeCategory === value
                    ? 'item-category__title nav-link nav-link-active'
                    : 'item-category__title nav-link'
                }
              >
                {value}
              </h3>
              <ul className='item-category__list'>
                {categories[value].length > 0 &&
                  categories[value].map((subCategory, index) => (
                    <li
                      className={
                        activeCategory === subCategory
                          ? 'item-category__subcategory nav-link nav-link-active'
                          : 'item-category__subcategory nav-link'
                      }
                    >
                      <a onClick={() => setActiveCategory(subCategory)}>{subCategory}</a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </aside>
  );
}

export default Aside;
