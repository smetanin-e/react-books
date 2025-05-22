import ContentLoader from 'react-content-loader';

function AsidePreLoading() {
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
}

export default AsidePreLoading;

/**
 * <ContentLoader
      speed={2}
      width={188}
      height={500}
      viewBox='0 0 188 500'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='224' y='3' rx='0' ry='0' width='188' height='500' />
      <rect x='0' y='0' rx='0' ry='0' width='184' height='40' />
      <rect x='12' y='54' rx='0' ry='0' width='184' height='25' />
      <rect x='24' y='89' rx='0' ry='0' width='162' height='24' />
      <rect x='24' y='120' rx='0' ry='0' width='160' height='24' />
      <rect x='24' y='152' rx='0' ry='0' width='160' height='24' />
      <rect x='24' y='183' rx='0' ry='0' width='160' height='24' />
      <rect x='12' y='224' rx='0' ry='0' width='184' height='25' />
      <rect x='28' y='259' rx='0' ry='0' width='160' height='24' />
      <rect x='28' y='290' rx='0' ry='0' width='160' height='24' />
      <rect x='28' y='322' rx='0' ry='0' width='160' height='24' />
      <rect x='28' y='353' rx='0' ry='0' width='160' height='24' />
      <rect x='12' y='391' rx='0' ry='0' width='184' height='25' />
      <rect x='28' y='424' rx='0' ry='0' width='160' height='24' />
      <rect x='28' y='455' rx='0' ry='0' width='160' height='24' />
      <rect x='18' y='520' rx='0' ry='0' width='160' height='24' />
    </ContentLoader>
 */
