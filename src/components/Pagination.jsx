import React from 'react';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  console.log(pageNumbers);

  return (
    <>
      {pageNumbers.length > 1 && (
        <div className='pagination'>
          <ul className='pagination__list'>
            {pageNumbers.map((num) => (
              <li
                key={num}
                onClick={() => paginate(num)}
                className={currentPage === num ? 'current-page' : ''}
              >
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Pagination;
