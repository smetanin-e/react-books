import ContentLoader from 'react-content-loader';

const AsidePreLoading: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={188}
      height={500}
      viewBox='0 0 188 500'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='188' height='500' />
    </ContentLoader>
  );
};

export default AsidePreLoading;
