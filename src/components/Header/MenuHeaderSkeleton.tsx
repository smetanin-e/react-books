import React from 'react';
import ContentLoader from 'react-content-loader';

const MenuHeaderSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1022}
      height={50}
      viewBox='0 0 1022 50'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='1022' cy='80' r='25' />
      <rect x='0' y='5' rx='0' ry='0' width='102' height='40' />
      <rect x='152' y='5' rx='0' ry='0' width='102' height='40' />
      <rect x='304' y='5' rx='0' ry='0' width='102' height='40' />
      <rect x='456' y='5' rx='0' ry='0' width='102' height='40' />
      <rect x='608' y='5' rx='0' ry='0' width='102' height='40' />
      <rect x='760' y='5' rx='0' ry='0' width='102' height='40' />
      <rect x='912' y='5' rx='0' ry='0' width='102' height='40' />
    </ContentLoader>
  );
};

export default MenuHeaderSkeleton;
