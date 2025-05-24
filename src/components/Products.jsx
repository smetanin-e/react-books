import React from 'react';
import Book from './Book';

function Products({ items }) {
  console.log(items);

  return (
    <div className='products'>
      {items.map((obj) => (
        <Book key={obj.id} {...obj} onClick={() => alert(obj.id)} />
      ))}
    </div>
  );
}

export default Products;
