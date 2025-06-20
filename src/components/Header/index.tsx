import logo from '../../assets/img/logo.png';

import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { fetchBooks } from '../../redux/slices/itemSlice';
import { useAppDispatch } from '../../redux/store';

import Search from './Search';
import Wish from './Wish';
import Cart from './CartHeader';
import MenuHeader from './MenuHeader';

import Popup from '../popups/Popup';

const Header = () => {
  const dispatch = useAppDispatch();

  const getBooks = async () => {
    dispatch(fetchBooks());
  };

  React.useEffect(() => {
    getBooks();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 860px)' });
  const [popup, setPopup] = React.useState(false);
  return (
    <>
      {popup && <Popup setPopup={setPopup} />}
      <header className='header'>
        <div className='header__body body-header'>
          <div className='body-header__container'>
            <Link to={'/'}>
              <div className='body-header__logo'>
                <img className='image' src={logo} alt='logo' />
              </div>
            </Link>
            {!isMobile && <Search />}

            <div className='body-header__items items-header'>
              <Cart />
              <Wish />

              <div onClick={() => setPopup(true)} className='items-header__item account'>
                <svg
                  width='25px'
                  height='25px'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  id='Layer_1'
                  version='1.1'
                  viewBox='0 0 128 128'
                  xmlSpace='preserve'
                >
                  <circle className='st0' cx='64' cy='64' r='64' />
                  <path
                    className='st1'
                    d='M77.4,75.3c-2-0.3-3.4-1.9-3.4-3.9v-5.8c2.1-2.3,3.5-5.3,3.8-8.7l0.2-3.2c1.1-0.6,2.2-2,2.7-3.8  c0.7-2.5,0.1-4.7-1.5-4.9c-0.2,0-0.4,0-0.7,0l0.4-5.9C79.6,30.9,73.3,24,65.3,24h-2.5c-8,0-14.3,6.9-13.8,15.1l0.4,6  C49.2,45,49,45,48.8,45c-1.6,0.2-2.2,2.4-1.5,4.9c0.5,1.9,1.7,3.3,2.8,3.9l0.2,3.1c0.2,3.4,1.6,6.4,3.7,8.7v5.8c0,2-1.4,3.6-3.4,3.9  C41.8,76.8,27,83.2,27,90v14h74V90C101,83.2,86.2,76.8,77.4,75.3z'
                  />
                </svg>
                <span className='items-header__item-name'>Профиль</span>
              </div>
            </div>
          </div>
        </div>

        <MenuHeader />
      </header>
    </>
  );
};

export default Header;
