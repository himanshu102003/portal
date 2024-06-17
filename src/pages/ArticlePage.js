import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { url } = useParams();
  const articles = useSelector((state) => state.news.articles);
  const article = articles.find(article => article.url === decodeURIComponent(url));

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
