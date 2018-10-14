import React from 'react';
import BadgesList from '../containers/BadgesList';
import { Link } from 'react-router-dom';
import '../styles/article-card.scss';


const ArticleCard = (props) => (
  <div className="article-card">
    <span className="title">{props.title}</span>
    <div className="badges-list-container">
      <BadgesList onBadgeClick={(badge) => props.onBadgeClick(badge)} categories={props.textCategories.map(({ category }) => category.name)}></BadgesList>
    </div>
    <span className="author">{props.author && `${props.author.firstName} ${props.author.lastName}`}</span>
    <span className="date">{props.date && new Date(props.date).toLocaleDateString()}</span>
    <Link to={'/article/' + (props._id)} className="more-link">View Full</Link>
  </div>
)

export default ArticleCard;
