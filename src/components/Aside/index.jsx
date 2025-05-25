import React from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, isItSubCategory } from '../../redux/slices/categorySlice';

import AsidePreLoading from './AsidePreLoading';
import { Link } from 'react-router-dom';

function Aside({ isLoading, setIsLoading }) {
  const [data, setData] = React.useState([]); //состояние для хранения данных их БД

  //При первом рендере получаем все объекты из базы данных для формирования всех категорий и подкатегорий
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios
          .get('https://815c3fb7d56c4537.mokky.dev/books')
          .then((response) => response.data);
        setData(response);
      } catch (error) {
        console.log(error.message || 'Произошла ошибка');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [setIsLoading]);

  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.curentCategory);

  const setCategoryActive = (item) => {
    dispatch(changeCategory(item));
  };
  const setIsItSubCategory = (bool) => {
    dispatch(isItSubCategory(bool));
  };

  //создаем функцию, которая принимает в качестве аргументов массив объектов с книгами,
  //название категории и название подкатегории
  const categoriesFromDataBase = (arr, cat, subCat) => {
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

  const categories = categoriesFromDataBase(data, 'category', 'subCategory');
  const categoryTitles = Object.keys(categories);

  return (
    <aside className='products-page__categories categories'>
      {isLoading ? (
        <AsidePreLoading />
      ) : (
        <>
          <h2 className='categories__title'>Категории</h2>
          {categoryTitles.map((value, index) => (
            <div className='categories__item item-category'>
              <Link
                to={'/categories'}
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
                      className={
                        activeCategory === subCategory
                          ? 'item-category__subcategory nav-link nav-link-active'
                          : 'item-category__subcategory nav-link'
                      }
                    >
                      <Link
                        to={'/categories'}
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
}

export default Aside;
