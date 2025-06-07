import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={1000}
      viewBox='0 0 1000 1000'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='188' height='600' />
      <rect x='205' y='0' rx='0' ry='0' width='600' height='42' />

      <rect x='205' y='60' rx='0' ry='0' width='100' height='150' />
      <rect x='205' y='220' rx='0' ry='0' width='100' height='30' />
      <rect x='220' y='260' rx='0' ry='0' width='70' height='25' />

      <rect x='355' y='60' rx='0' ry='0' width='100' height='150' />
      <rect x='355' y='220' rx='0' ry='0' width='100' height='30' />
      <rect x='370' y='260' rx='0' ry='0' width='70' height='25' />

      <rect x='505' y='60' rx='0' ry='0' width='100' height='150' />
      <rect x='505' y='220' rx='0' ry='0' width='100' height='30' />
      <rect x='520' y='260' rx='0' ry='0' width='70' height='25' />

      <rect x='655' y='60' rx='0' ry='0' width='100' height='150' />
      <rect x='655' y='220' rx='0' ry='0' width='100' height='30' />
      <rect x='670' y='260' rx='0' ry='0' width='70' height='25' />

      <rect x='805' y='60' rx='0' ry='0' width='100' height='150' />
      <rect x='805' y='220' rx='0' ry='0' width='100' height='30' />
      <rect x='820' y='260' rx='0' ry='0' width='70' height='25' />
    </ContentLoader>
  );
};

export default Skeleton;
