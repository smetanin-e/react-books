import Book from '../Book';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ItemBook } from '../../redux/slices/itemSlice';

import ItemsSceleton from './ItemsSkeleton';

type ItepsProps = {
  items: ItemBook[];
};

const Items = ({ items }: ItepsProps) => {
  const { status } = useSelector((state: RootState) => state.books);
  const skeletons = [...new Array(15)].map((_, index) => <ItemsSceleton key={index} />);

  return (
    <div className='products'>
      {status === 'loading' ? skeletons : items.map((obj) => <Book key={obj.id} {...obj} />)}
    </div>
  );
};

export default Items;
