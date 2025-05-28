import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCategory, isItSubCategory } from '../../redux/slices/categorySlice';
import { MenuContext } from '../../App';
function MenuHeader() {
  const dispatch = useDispatch();
  const { menu } = React.useContext(MenuContext);

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
          {menu.map((item) => (
            <li className='nav-header__link nav-link'>
              <Link
                onClick={() => {
                  setCategoryActive(item);
                  setIsItSubCategory(true);
                }}
                to={'/categories'}
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
