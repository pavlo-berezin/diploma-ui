import React, { Component, PropTypes } from 'react'
import BadgesList from '../containers/BadgesList'

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
            <BadgesList categories={this.props.categories}></BadgesList>
        </div>
        <div>
          <h5>{this.props.date}</h5>
          <div>
            <p>{this.props.body}</p>
          </div>
          <span>{this.props.author}</span>
        </div>
      </div>
    );
  }
}

Article.defaultProps = {
    title: '',
    body: '',
    author: '',
    id: '',
    date: '',
    categories: []
};
