import React from 'react';
import BadgesList from '../containers/BadgesList';
import '../styles/article.scss';

const Article = (props) => (
  <div className="article">
    <span className="delete-btn" onClick={() => props.onDeleteClick()}>Delete</span>
    <div className="title-section">
      <div className="article-info">
        <span className="author">{props.author && `${props.author.firstName} ${props.author.lastName}`}</span>
        <span className="date">{props.date && new Date(props.date).toLocaleDateString()}</span>
      </div>
      <div className="article-title">
        <span>{props.title}</span>
      </div>
    </div>
    <div className="badges-list-container">
      <BadgesList onBadgeClick={(badge) => props.onBadgeClick(badge)} categories={props.textCategories.map(({ category }) => category.name)}></BadgesList>
    </div>
    <div className="body-container">
      <p className="body">{props.body}</p>
    </div>
  </div>
)

export default Article;
