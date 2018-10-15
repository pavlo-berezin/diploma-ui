import React, { Component } from 'react';
import '../styles/article-form.scss';
import { ReactComponent as XIcon } from '../icons/x.svg';


export default class ArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      article: {
        value: '',
        files: null
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, files } = event.target;

    if (files) {
      this.setState({
        ...this.state,
        [name]: { value, files }
      });
    } else {
      this.setState({
        ...this.state,
        [name]: value
      });
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body, article } = this.state;

    let request = {
      title,
      body
    };

    if (article.value) {
      request = {
        ...request,
        article: article.files[0]
      }
    }

    this.props.onSubmit(request);
  }

  clearFile() {
    this.setState({
      ...this.state,
      article: {
        value: '',
        files: null
      }
    });
  }

  render() {
    const { title, article, body } = this.state;
    const fileName = article.value;
    return (
      <form onSubmit={this.handleSubmit} className="article-form">
        <div className="title-container">
          <label htmlFor="title">Title:</label>
          <input name="title" value={title} onChange={this.handleChange} required />
        </div>
        <div className="file-container">
          <label htmlFor="article">File:</label>
          <input type="file" name="article" value={ fileName } onChange={this.handleChange} />
          { fileName && <XIcon className="remove-file-icon" onClick={() => this.clearFile()} /> }
        </div>
        <div className="body-container">
          <label htmlFor="body">Body:</label>
          <textarea name="body" value={ body } onChange={this.handleChange} disabled={fileName}></textarea>
        </div>
        <div className="submit-container">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
