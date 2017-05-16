import React, { Component, PropTypes } from 'react'
import Badge from '../components/Badge'
export default class BadgesList extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    render() {
      return (
        <div className="badges-list">
            {this.props.categories.map((category, index) =>
                <Badge name={category} key={index} ></Badge>
            )}
        </div>
      )
    }
}
