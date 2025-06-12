import React from 'react';
import ContentLoader from 'react-content-loader';

const BookPageSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1022}
      height={650}
      viewBox='0 0 1022 650'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='1022' height='35' />
      <rect x='0' y='55' rx='0' ry='0' width='250' height='391' />
      <rect x='303' y='55' rx='0' ry='0' width='283' height='40' />
      <circle cx='1005' cy='70' r='15' />
      <rect x='303' y='125' rx='0' ry='0' width='717' height='200' />
      <rect x='303' y='350' rx='0' ry='0' width='250' height='45' />
      <rect x='643' y='350' rx='0' ry='0' width='250' height='45' />
    </ContentLoader>
  );
};

export default BookPageSkeleton;
