import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useCategoryActions from '../../utils/useCategoryActions';
import MenuHeaderSkeleton from './MenuHeaderSkeleton';
const MenuHeader = React.memo(() => {
  const { menu, status } = useSelector((state: RootState) => state.books);

  const { setCategoryActive, setIsItSubCategory } = useCategoryActions();
  return (
    <nav className='header__nav nav-header'>
      <div className='nav-header__container'>
        <ul className='nav-header__list'>
          {status === 'loading' ? (
            <MenuHeaderSkeleton />
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
});

export default MenuHeader;
