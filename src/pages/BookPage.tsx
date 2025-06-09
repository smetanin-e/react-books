import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IconWish from '../components/IconWish';
import { RootState } from '../redux/store';
import { ItemBook } from '../redux/slices/itemSlice';
import Breadcrumds from '../components/Breadcrumds';
import BookInfoPrice from '../components/BookInfoPrice';

function BookPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [book, setBook] = React.useState<ItemBook>();
  const { id } = useParams();

  React.useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get('https://815c3fb7d56c4537.mokky.dev/books/' + id);
        setBook(data);
      } catch (error) {
        alert('Не удалось загрузить станицу');
      }
    };
    fetchItem();
  }, [id]);

  if (!book) {
    return <>Загрузка...</>;
  }

  return (
    <>
      <Breadcrumds book={book} />
      <div className='book-info'>
        <IconWish item={book} />

        <div className='book-info__image'>
          <img className='image' src={book.imageUrl} alt='book' />
        </div>
        <div className='book-info__body body-book-info'>
          <h1 className='body-book-info__title'>{book.title}</h1>

          {book.description &&
            book.description.split('\n\n').map((p, i) => (
              <p key={p + i} className='body-book-info__text'>
                {p}
              </p>
            ))}
          <BookInfoPrice book={book} />
        </div>
      </div>
    </>
  );
}

export default BookPage;
