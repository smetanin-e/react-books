import React from 'react';

import { useSelector } from 'react-redux';
import { changeCategory, isItSubCategory } from '../../redux/slices/categorySlice';

import AsidePreLoading from './AsidePreLoading';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../redux/slices/itemSlice';
import { RootState, useAppDispatch } from '../../redux/store';

const Aside = () => {
  console.log('render Aside');
  const dispatch = useAppDispatch();

  const { books, status } = useSelector((state: RootState) => state.books);
  const activeCategory = useSelector((state: RootState) => state.category.curentCategory);
  const getBooks = async () => {
    dispatch(fetchBooks());
  };

  React.useEffect(() => {
    getBooks();
    console.log('first render Aside');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCategoryActive = (item: string) => {
    dispatch(changeCategory(item));
  };
  const setIsItSubCategory = (value: boolean) => {
    dispatch(isItSubCategory(value));
  };

  //создаем функцию, которая принимает в качестве аргументов массив объектов с книгами,
  //название категории и название подкатегории
  type Book = {
    [key: string]: any;
    category: string;
    subCategory: string;
  };
  type CategoryResult = {
    [key: string]: string[];
  };
  const categoriesFromDataBase = (
    arr: Book[],
    cat: keyof Book,
    subCat: keyof Book,
  ): CategoryResult => {
    let result: CategoryResult = { ВСЕ: [] };

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
  const categories = categoriesFromDataBase(books, 'category', 'subCategory');
  const categoryTitles = Object.keys(categories);

  return (
    <aside className='products-page__categories categories'>
      {status === 'loading' ? (
        <AsidePreLoading />
      ) : (
        <>
          <h2 className='categories__title'>Категории</h2>
          {categoryTitles.map((value, index) => (
            <div key={value + index} className='categories__item item-category'>
              <Link
                to={'/products'}
                onClick={() => {
                  setCategoryActive(value);
                  setIsItSubCategory(false);
                }}
                className={
                  activeCategory === value
                    ? 'item-category__title nav-link nav-link-active'
                    : 'item-category__title nav-link'
                }
              >
                {value}
              </Link>

              <ul className='item-category__list'>
                {categories[value].length > 0 &&
                  categories[value].map((subCategory, index) => (
                    <li
                      key={subCategory + index}
                      className={
                        activeCategory === subCategory
                          ? 'item-category__subcategory nav-link nav-link-active'
                          : 'item-category__subcategory nav-link'
                      }
                    >
                      <Link
                        to={'/products'}
                        onClick={() => {
                          setCategoryActive(subCategory);
                          setIsItSubCategory(true);
                        }}
                      >
                        {subCategory}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </aside>
  );
};

export default Aside;
