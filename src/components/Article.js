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
        <div className="article">
            <span className="title">{this.props.title}</span>
            <div className="sub-title">
                <span className="author">{this.props.author}</span>
                <span className="date">{new Date(this.props.date).toLocaleDateString()}</span>
            </div>
            <div className="badges-list-container">
                <BadgesList categories={this.props.categories}></BadgesList>
            </div>
            <div className="body-container">
                    <p className="body">{this.props.body}</p>
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
