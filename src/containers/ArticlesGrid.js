import React from 'react';
import ArticleCard from '../components/ArticleCard';
import '../styles/articles-grid.scss';

const ArticlesGrid = (props) => (
  <div className="articles-grid">
    {props.articles.map((article, index) =>
      <div key={article._id} className="article-container">
        <ArticleCard {...article} id={article._id} onBadgeClick={(category) => props.onCategorySelect(category)} />
      </div>
    )}
  </div>
);

export default ArticlesGrid;
