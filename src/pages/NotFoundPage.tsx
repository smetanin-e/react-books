import Empty from '../components/Empty';
import errorImage from '../assets/img/404.jpg';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Empty image={errorImage} />
    </>
  );
};
export default NotFoundPage;
