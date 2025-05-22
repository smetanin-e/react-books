import { Link } from 'react-router-dom';

function BookPage() {
  return (
    <Link to='/'>
      <button className='btn btn_black'>на главную</button>
    </Link>
  );
}

export default BookPage;
