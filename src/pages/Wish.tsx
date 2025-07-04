import emptyWish from '../assets/img/empty-wish.png';

import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

import Items from '../components/Items/';
import Empty from '../components/Empty';

const Wish = () => {
  const wishItems = useSelector((state: RootState) => state.books.wishItems);

  return (
    <div>
      {wishItems.length > 0 ? (
        <>
          <h1 className='title'>Твой список желаемых книг:</h1>
          <Items items={wishItems} />
        </>
      ) : (
        <Empty image={emptyWish} title='Список желаемых книг пуст' />
      )}
    </div>
  );
};

export default Wish;
