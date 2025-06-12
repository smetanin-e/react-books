import React from 'react';
import ContentLoader from 'react-content-loader';

const SliderSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={742}
      height={336}
      viewBox='0 0 742 336'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='18' y='520' rx='0' ry='0' width='160' height='24' />
      <rect x='0' y='0' rx='0' ry='0' width='742' height='336' />
    </ContentLoader>
  );
};

export default SliderSkeleton;
