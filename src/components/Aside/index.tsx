/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { RootState } from '../../redux/store';

import AsidePreLoading from './AsidePreLoading';
import AsideHeader from './AsideHeader';

import useCategoryActions from '../../utils/useCategoryActions';
import { categoriesFromDataBase } from '../../utils/categoriesFromDataBase';

const Aside = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 860px)' });

  const { books, status } = useSelector((state: RootState) => state.books);
  const { curentCategory, itSubCategory } = useSelector((state: RootState) => state.category);

  const { setCategoryActive, setIsItSubCategory } = useCategoryActions();

  const [open, setOpen] = React.useState(true);

  const categories = categoriesFromDataBase(books, 'category', 'subCategory');
  const categoryTitles = Object.keys(categories);

  const handleCategoryClick = React.useCallback(
    (value: string, isSubCategory: boolean) => {
      setCategoryActive(value);
      setIsItSubCategory(isSubCategory);
      if (isMobile) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    },
    [isMobile],
  );

  React.useEffect(() => {
    localStorage.setItem('category', curentCategory);
    localStorage.setItem('subCategory', JSON.stringify(itSubCategory));
  }, [curentCategory]);

  React.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <aside className='products-page__categories categories'>
      {status === 'loading' ? (
        <AsidePreLoading />
      ) : (
        <>
          <AsideHeader open={open} setOpen={setOpen} />

          {open &&
            categoryTitles.map((value, index) => (
              <div key={value + index} className='categories__item item-category'>
                <Link
                  to={'/products'}
                  onClick={() => handleCategoryClick(value, false)}
                  className={
                    curentCategory === value
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
                          curentCategory === subCategory
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
