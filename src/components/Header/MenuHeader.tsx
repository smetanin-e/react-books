import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { changeCategory, isItSubCategory } from '../../redux/slices/categorySlice';
import { RootState, useAppDispatch } from '../../redux/store';
const MenuHeader = React.memo(() => {
  const dispatch = useAppDispatch();
  const menu = useSelector((state: RootState) => state.books.menu);

  const setCategoryActive = (item: string) => {
    dispatch(changeCategory(item));
  };
  const setIsItSubCategory = (value: boolean) => {
    dispatch(isItSubCategory(value));
  };
  return (
    <nav className='header__nav nav-header'>
      <div className='nav-header__container'>
        <ul className='nav-header__list'>
          {menu.map((item, index) => (
            <li key={item + index} className='nav-header__link nav-link'>
              <Link
                onClick={() => {
                  setCategoryActive(item);
                  setIsItSubCategory(true);
                }}
                to={'/products'}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

export default MenuHeader;
