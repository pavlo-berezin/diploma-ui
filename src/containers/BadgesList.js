import React from 'react';
import Badge from '../components/Badge';
import '../styles/badges-list.scss';

const BadgesList = (props) => (
  <div className="badges-list">
    {props.categories.map((category, index) =>
      <Badge name={category} key={index} onClick={() => props.onBadgeClick(category)}></Badge>
    )}
  </div>
);

export default BadgesList;
