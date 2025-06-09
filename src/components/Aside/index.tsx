/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useSelector } from 'react-redux';

import AsidePreLoading from './AsidePreLoading';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../redux/slices/itemSlice';
import { RootState, useAppDispatch } from '../../redux/store';

import useCategoryActions from '../../utils/useCategoryActions';
import { categoriesFromDataBase } from '../../utils/categoriesFromDataBase';

const Aside = () => {
  const dispatch = useAppDispatch();

  const { books, status } = useSelector((state: RootState) => state.books);
  const activeCategory = useSelector((state: RootState) => state.category.curentCategory);
  const getBooks = async () => {
    dispatch(fetchBooks());
  };

  React.useEffect(() => {
    getBooks();
  }, []);

  const [open, setOpen] = React.useState(true);
  const toggleOpenCategories = () => {
    setOpen(!open);
  };
  const { setCategoryActive, setIsItSubCategory } = useCategoryActions();

  const handleCategoryClick = React.useCallback((value: string, isSubCategory: boolean) => {
    setCategoryActive(value);
    setIsItSubCategory(isSubCategory);
    setOpen(!false);
  }, []);
  const categories = categoriesFromDataBase(books, 'category', 'subCategory');
  const categoryTitles = Object.keys(categories);

  return (
    <aside className='products-page__categories categories'>
      {status === 'loading' ? (
        <AsidePreLoading />
      ) : (
        <>
          <div className='categories__header'>
            <h2 className='categories__title'>Категории</h2>
            <button onClick={toggleOpenCategories} className='categories__button'>
              =
            </button>
          </div>

          {open &&
            categoryTitles.map((value, index) => (
              <div key={value + index} className='categories__item item-category'>
                <Link
                  to={'/products'}
                  onClick={() => handleCategoryClick(value, false)}
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
                          onClick={() => handleCategoryClick(subCategory, true)}
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
