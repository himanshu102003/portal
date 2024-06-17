import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setPage } from '../store/newsSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
  };

  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
