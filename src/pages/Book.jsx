import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import Products from '../components/Products';

function Book() {
  return (
    <div className='wrapper'>
      <Header />

      <main className='page'>
        <div className='page__container'>
          <Link to='/'>
            <button className='btn btn_black'>на главную</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Book;
