import Book from './Book';
import { useDispatch } from 'react-redux';
import { onClickItem } from '../redux/slices/itemSlice';
import { Link } from 'react-router-dom';

function Products({ items }) {
  const dispatch = useDispatch();

  return (
    <div className='products'>
      {items.map((obj) => (
        <Link key={obj.id} to={'/bookPage'}>
          <Book key={obj.id} {...obj} onClick={() => dispatch(onClickItem(obj))} />
        </Link>
      ))}
    </div>
  );
}

export default Products;
