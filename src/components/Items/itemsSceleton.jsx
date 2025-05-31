import ContentLoader from 'react-content-loader';

function itemsSceleton() {
  return (
    <ContentLoader
      speed={2}
      width={130}
      height={270}
      viewBox='0 0 130 270'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='130' height='170' />
      <rect x='0' y='180' rx='0' ry='0' width='130' height='30' />
      <rect x='32' y='220' rx='0' ry='0' width='65' height='25' />
    </ContentLoader>
  );
}

export default itemsSceleton;
