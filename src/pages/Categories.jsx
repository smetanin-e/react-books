import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Aside from '../components/Aside';
import Products from '../components/Products';

function Categories() {
  return (
    <div className='wrapper'>
      <Header />

      <main className='page'>
        <div className='page__container'>
          <div class='page__products products-page'>
            <Aside />

            <div class='products-page__books '>
              <div class='products-page__items'>
                <h1 class='products-page__title'>Категория</h1>

                <Products />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Categories;
