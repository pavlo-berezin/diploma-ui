import React, { Component, PropTypes } from 'react'
import Badge from '../components/Badge'
import '../styles/badges-list.scss';

export default class BadgesList extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    render() {
      return (
        <div className="badges-list">
            {this.props.categories.map((category, index) =>
                <Badge name={category} key={index} onClick={() => this.props.onBadgeClick(category)}></Badge>
            )}
        </div>
      )
    }
}
