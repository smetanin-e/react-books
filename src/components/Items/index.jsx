import Book from '../Book';
import { useSelector } from 'react-redux';
import ItemsSceleton from './ItemsSceleton';
import { RootState } from '../../redux/store';
const Items = ({ items }) => {
  const { status } = useSelector((state) => state.books);
  const skeletons = [...new Array(15)].map((_, index) => <ItemsSceleton key={index} />);
  return (
    <div className='products'>
      {status === 'loading' ? skeletons : items.map((obj) => <Book key={obj.id} {...obj} />)}
    </div>
  );
};

export default Items;
