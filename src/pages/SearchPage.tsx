import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Items from '../components/Items';
const SearchPage = () => {
  const { books, searchValue } = useSelector((state: RootState) => state.books);
  const searchedBooks = books.filter((obj) =>
    obj.title.toLowerCase().includes(searchValue.toLowerCase().trim()),
  );

  return (
    <div>
      <>
        <h1 className='title'>
          Поиск по запросу: <span>"{searchValue}"</span>{' '}
        </h1>
        {searchedBooks.length > 0 ? <Items items={searchedBooks} /> : <div>Пусто...</div>}
      </>
    </div>
  );
};

export default SearchPage;
