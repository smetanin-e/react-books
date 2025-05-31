import Book from './Book';
import { useDispatch } from 'react-redux';
import { onClickItem } from '../redux/slices/itemSlice';

function Items({ items }) {
  const dispatch = useDispatch();

  return (
    <div className='products'>
      {items.map((obj) => (
        <Book key={obj.id} {...obj} onClick={() => dispatch(onClickItem(obj))} />
      ))}
    </div>
  );
}

export default Items;
