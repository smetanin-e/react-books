import { Link } from 'react-router-dom';

import Button from './Button';

type EmptyProps = {
  title?: string;
  image: string;
};

const Empty = ({ image, title }: EmptyProps) => {
  return (
    <div className='page-empty'>
      {title && <h1 className='page-empty__title title'>{title}</h1>}

      <div className='page-empty__image'>
        <img className='image' src={image} alt='' />
      </div>
      <Link to={'/'}>
        <Button styleClasses={'page-empty__button btn btn_green'}>На главную</Button>
      </Link>
    </div>
  );
};
export default Empty;
