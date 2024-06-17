import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/newsSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page }));
  }, [dispatch, category, page]);

  return (
    <div>
      <CategoryFilter />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <div>
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default HomePage;
