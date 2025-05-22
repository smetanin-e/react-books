import ContentLoader from 'react-content-loader';

function TabsPreLoading() {
  return (
    <ContentLoader
      speed={2}
      width={826}
      height={40}
      viewBox='0 0 826 40'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='18' y='520' rx='0' ry='0' width='160' height='24' />
      <rect x='0' y='0' rx='0' ry='0' width='620' height='42' />
    </ContentLoader>
  );
}

export default TabsPreLoading;
