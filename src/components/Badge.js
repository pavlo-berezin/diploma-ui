import React from 'react';
import '../styles/badge.scss';

const Badge = (props) => (
  <div className="badge" onClick={props.onClick}>
    <span>{props.name}</span>
  </div>
)

export default Badge;
