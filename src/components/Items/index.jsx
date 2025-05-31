import Book from '../Book';
import { useSelector, useDispatch } from 'react-redux';
import { onClickItem } from '../../redux/slices/itemSlice';
import ItemsSceleton from './itemsSceleton';
function Items({ items }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.books);
  const skeletons = [...new Array(15)].map((_, index) => <ItemsSceleton key={index} />);
  return (
    <div className='products'>
      {status === 'loading'
        ? skeletons
        : items.map((obj) => (
            <Book key={obj.id} {...obj} onClick={() => dispatch(onClickItem(obj))} />
          ))}
    </div>
  );
}

export default Items;
