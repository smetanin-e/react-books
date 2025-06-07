import React from 'react';
import Aside from '../components/Aside';
import Items from '../components/Items/Index';

import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchCategoryBooks } from '../redux/slices/categorySlice';

function Products() {
  const dispatch = useAppDispatch();
  //создаем состояние для хранения загруженных книг из сервера
  const { products } = useSelector((state: RootState) => state.category);

  const activeCategory = useSelector((state: RootState) => state.category.curentCategory);
  const itSubCategory = useSelector((state: RootState) => state.category.itSubCategory);

  const getBooks = async () => {
    dispatch(fetchCategoryBooks({ activeCategory, itSubCategory }));
  };

  React.useEffect(() => {
    getBooks();
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  //pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber: number) => setCurrentPage(PageNumber);

  return (
    <div className='page__products products-page'>
      <Aside />

      <div className='products-page__books '>
        <div className='products-page__items'>
          <h1 className='products-page__title'>{activeCategory}</h1>
          <Items items={currentItems} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
