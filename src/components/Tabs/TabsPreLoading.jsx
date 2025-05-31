import ContentLoader from 'react-content-loader';

function TabsPreLoading() {
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={1000}
      viewBox='0 0 1000 1000'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='203' y='33' rx='0' ry='0' width='72' height='105' />
      <rect x='204' y='145' rx='0' ry='0' width='70' height='17' />
      <rect x='223' y='167' rx='0' ry='0' width='36' height='16' />
    </ContentLoader>
  );
}

export default TabsPreLoading;
