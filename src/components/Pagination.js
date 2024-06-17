import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/newsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalResults } = useSelector((state) => state.news);

  const totalPages = Math.ceil(totalResults / 20); // Assuming 20 articles per page

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };

  return (
    <div>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>{page}</span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
