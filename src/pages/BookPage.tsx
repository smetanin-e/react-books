import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { onAddToCart } from '../redux/slices/cartSlice';
import { Link, useParams } from 'react-router-dom';
import IconWish from '../components/IconWish';
import Button from '../components/Button';
import { RootState, useAppDispatch } from '../redux/store';
import { ItemBook } from '../redux/slices/itemSlice';
import useCategoryActions from '../utils/useCategoryActions';

function BookPage() {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { setCategoryActive, setIsItSubCategory } = useCategoryActions();

  const addToCart = (obj: ItemBook) => {
    const item = {
      id: obj.id,
      title: obj.title,
      author: obj.author,
      price: obj.price,
      imageUrl: obj.imageUrl,
    };
    dispatch(onAddToCart(item));
  };

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

  const checkInCart = cartItems.some((elem) => elem.id === book.id);

  return (
    <>
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
          {/* <p className='body-book-info__text'>{currentBook.description}</p> */}
          <div className='body-book-info__price price-book-info'>
            <div className='price-book-info__price'>
              <div className='price-book-info__item'>
                <p className='price-book-info__item-price'>
                  Цена: <span>{book.price} ₽</span>
                </p>
                {book.sale && (
                  <p className='price-book-info__sale-info'>
                    Скидка {book.sale}%{' '}
                    <span className='line-through'>
                      {Math.ceil(book.price / (1 - book.sale / 100))} ₽
                    </span>
                  </p>
                )}
              </div>
              <div className='price-book-info__item'>
                {!checkInCart ? (
                  <Button
                    handleClick={() => addToCart(book)}
                    styleClasses={'price-book-info__button btn btn_green'}
                  >
                    В корзину
                  </Button>
                ) : (
                  <Link to={'/cart'}>
                    <Button styleClasses={'price-book-info__button btn btn_blue'}>
                      К оформлению
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className='price-book-info__pay'>
              <p className='price-book-info__pay-scure'>Безопасные платежи</p>

              <ul className='price-book-info__pay-list'>
                <li>
                  <img
                    src='https://kanistra-shop.ru/local/templates/kanistra/img/design/sbp-logo.png'
                    alt='image111'
                  />
                </li>

                <li>
                  <img
                    src='https://stropy-yuga.ru/image/catalog/stropy/Karta%20Mir.png'
                    alt='image111'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
