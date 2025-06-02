import ContentLoader from 'react-content-loader';

const BannerPreLoading = () => (
  <ContentLoader
    speed={2}
    width={269}
    height={335}
    viewBox='0 0 269 335'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0' ry='0' width='269' height='335' />
  </ContentLoader>
);

export default BannerPreLoading;
