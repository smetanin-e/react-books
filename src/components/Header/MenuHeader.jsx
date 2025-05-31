import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, isItSubCategory } from '../../redux/slices/categorySlice';
function MenuHeader() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.books.menu);

  const setCategoryActive = (item) => {
    dispatch(changeCategory(item));
  };
  const setIsItSubCategory = (bool) => {
    dispatch(isItSubCategory(bool));
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
}

export default MenuHeader;
