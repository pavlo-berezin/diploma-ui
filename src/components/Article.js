import React from 'react';
import BadgesList from '../containers/BadgesList';
import '../styles/article.scss';

const Article = (props) => (
  <div className="article">
    <span className="title">{props.title}</span>
    <div className="sub-title">
      <span className="author">{props.author}</span>
      <span className="date">{props.date && new Date(props.date).toLocaleDateString()}</span>
    </div>
    <div className="badges-list-container">
      <BadgesList onBadgeClick={(badge) => props.onBadgeClick(badge)} categories={props.textCategories.map(({ category }) => category.name)}></BadgesList>
    </div>
    {!props.hideBody &&
      <div className="body-container">
        <p className="body">{props.body}</p>
      </div>
    }
  </div>
)

export default Article;
