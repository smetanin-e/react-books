import { Link } from 'react-router-dom';

function Book() {
  return (
    <Link to='/'>
      <button className='btn btn_black'>на главную</button>
    </Link>
  );
}

export default Book;
