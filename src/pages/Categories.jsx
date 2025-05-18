import React from 'react';

import Aside from '../components/Aside';
import Products from '../components/Products';

function Categories() {
  return (
    <div class='page__products products-page'>
      <Aside />

      <div class='products-page__books '>
        <div class='products-page__items'>
          <h1 class='products-page__title'>Категория</h1>

          <Products />
        </div>
      </div>
    </div>
  );
}

export default Categories;
