import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import Search from './Search';

function Header() {
  return (
    <header className='header'>
      <div className='header__body body-header'>
        <div className='body-header__container'>
          <Link to={'/'}>
            <div className='body-header__logo'>
              <img className='image' src={logo} alt='logo' />
            </div>
          </Link>

          <Search />

          <div className='body-header__items items-header'>
            <Link to={'/cart'}>
              <div className='items-header__item cart'>
                <span className='count'>99</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  id='Capa_1'
                  x='0px'
                  y='0px'
                  width='25px'
                  height='25px'
                  viewBox='0 0 510 510'
                  style={{ enableBackground: 'new 0 0 510 510' }}
                  xmlSpace='preserve'
                >
                  <g id='shopping-cart'>
                    <path d='M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306    c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7    c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408    c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z' />
                  </g>
                </svg>
                <span>Корзина</span>
              </div>
            </Link>

            <Link to={'/wish'}>
              <div className='items-header__item wish'>
                <span className='count count_wish'>5</span>
                <svg width='25px' height='25px'>
                  <path d='M12.500,-0.002 C5.596,-0.002 -0.002,5.596 -0.002,12.500 C-0.002,19.405 5.596,25.002 12.500,25.002 C19.405,25.002 25.002,19.405 25.002,12.500 C25.002,5.596 19.405,-0.002 12.500,-0.002 ZM17.025,19.453 L12.445,17.044 L7.865,19.453 L8.740,14.353 L5.034,10.741 L10.155,9.997 L12.445,5.357 L14.734,9.997 L19.855,10.741 L16.150,14.353 L17.025,19.453 Z'></path>
                </svg>
                <span>Изиранное</span>
              </div>
            </Link>

            <div className='items-header__item account'>
              <svg
                width='25px'
                height='25px'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                id='Layer_1'
                style={{ enableBackground: 'new 0 0 128 128' }}
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
              <span>Профиль</span>
            </div>
          </div>
        </div>
      </div>

      <nav className='header__nav nav-header'>
        <div className='nav-header__container'>
          <ul className='nav-header__list'>
            <li className='nav-header__link nav-link nav-link-active'>
              <a href='#'>Computers</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Cooking</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Education</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Fiction</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Health</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Mathematics</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Medical</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Reference</a>
            </li>
            <li className='nav-header__link nav-link'>
              <a href='#'>Science</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
