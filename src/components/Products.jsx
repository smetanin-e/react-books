import Book from './Book';

function Products({ items }) {
  return (
    <div className='products'>
      {items.map((obj) => (
        <Book key={obj.id} {...obj} onClick={() => alert(obj.id)} />
      ))}
    </div>
  );
}

export default Products;
