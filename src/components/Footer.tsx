import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__technology technology-footer'>
          <h3 className='technology-footer__title'>Технологии</h3>
          <div className='technology-footer__body'>
            <ul className='technology-footer__list'>
              <li className='technology-footer__item'>ReactJS 19</li>
              <li className='technology-footer__item'>React Hooks (хуки)</li>
              <li className='technology-footer__item'>TypeScript </li>
              <li className='technology-footer__item'>Redux Toolkit (хранение данных)</li>
            </ul>
            <ul className='technology-footer__list'>
              <li className='technology-footer__item'>React Router v6 (навигация)</li>
              <li className='technology-footer__item'>Axios (отправка запроса на бэкенд)</li>
              <li className='technology-footer__item'>React Content Loader (скелетон)</li>
              <li className='technology-footer__item'>CSS-Modules / SCSS (стилизация)</li>
            </ul>
          </div>
        </div>

        <div className='footer__title'>Проект разработал Сметанин Евгений Евгеньевич</div>
      </div>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://t.me/esmet91'
        className='footer__link'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30px'
          height='30px'
          viewBox='0 0 32 32'
          fill='none'
        >
          <circle cx='16' cy='16' r='14' fill='url(#paint0_linear_87_7225)' />
          <path
            d='M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z'
            fill='white'
          />
          <defs>
            <linearGradient
              id='paint0_linear_87_7225'
              x1='16'
              y1='2'
              x2='16'
              y2='30'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#37BBFE' />
              <stop offset='1' stopColor='#007DBB' />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <p>2025 г.</p>
    </footer>
  );
};

export default Footer;
