import React, { Component, PropTypes } from 'react'

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
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
