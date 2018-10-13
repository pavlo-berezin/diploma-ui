import React from 'react';
import Article from '../components/Article';
import { Link } from 'react-router-dom';
import '../styles/articles-grid.scss';

const ArticlesGrid = (props) => (
  <div className="articles-grid">
    {props.articles.map((article, index) =>
      <div key={article._id} className="article-container">
        <Article {...article} id={article._id} onBadgeClick={(category) => props.onCategorySelect(category)} hideBody={true} />
        <Link to={'/article/' + article._id} key={index} className="more-link">Go to article</Link>
      </div>
    )}
  </div>
);

export default ArticlesGrid;
