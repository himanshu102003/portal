import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ArticleCard = ({ article }) => {
  return (
    <Card style={{ margin: '1rem' }}>
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <Link to={`/article/${article.url}`}>Read more</Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
