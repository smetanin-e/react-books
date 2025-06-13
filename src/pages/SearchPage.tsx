import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import Items from '../components/Items';
import Empty from '../components/Empty';

const SearchPage = () => {
  const { books, searchValue } = useSelector((state: RootState) => state.books);
  const searchedBooks = books.filter((obj) =>
    obj.title.toLowerCase().includes(searchValue.toLowerCase().trim()),
  );

  return (
    <div>
      <>
        {searchedBooks.length > 0 ? (
          <>
            <h1 className='title'>
              Поиск по запросу: <span>"{searchValue}"</span>{' '}
            </h1>
            <Items items={searchedBooks} />
          </>
        ) : (
          <Empty
            title={`Поиск по запросу "${searchValue}" дал результатов`}
            image={
              'https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BF%D0%BE%D0%B4-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D1%81%D1%82%D1%8B%D0%BC-%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%D0%BC-%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F-27090761.jpg'
            }
          />
        )}
      </>
    </div>
  );
};

export default SearchPage;
