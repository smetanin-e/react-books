import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFoundPage() {
  return (
    <div className='wrapper'>
      <Header />

      <main className='page'>
        <div className='page__container'>
          <h1 className='title'>Страница не найдена</h1>
          <Link to='/'>
            <button className='btn btn_black'>на главную</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default NotFoundPage;
