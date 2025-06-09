import React from 'react';
import useCategoryActions from '../utils/useCategoryActions';
import { Link } from 'react-router-dom';
import { ItemBook } from '../redux/slices/itemSlice';
type BreadcrumdsProps = {
  book: ItemBook;
};
const Breadcrumds = ({ book }: BreadcrumdsProps) => {
  const { setCategoryActive, setIsItSubCategory } = useCategoryActions();
  return (
    <div className='breadcrumds'>
      <nav>
        <ul className='breadcrumds__list'>
          <li>
            <Link to={'/'}>Главная</Link>
          </li>

          <li>
            <Link
              onClick={() => {
                setCategoryActive(book.category);
                setIsItSubCategory(false);
              }}
              to={'/products'}
            >
              {book.category}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setCategoryActive(book.subCategory);
                setIsItSubCategory(true);
              }}
              to={'/products'}
            >
              {book.subCategory}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumds;
