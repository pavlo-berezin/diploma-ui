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
    const getFileName = (fileName) => fileName.replace('C:\\fakepath\\', '');
    return (
      <form onSubmit={this.handleSubmit} className="article-form">
        <div className="form-item-container title-container">
          <input className="form-item form-item-input" name="title" value={title} onChange={this.handleChange} required />
          <label htmlFor="title" className="form-item-label">Article Title</label>
        </div>
        <div className="file-container">
          <label htmlFor="file" className="upload-file-button">Select file</label>
          <input type="file" className="file-input" name="article" id="file" value={fileName} onChange={this.handleChange} />
          {fileName && <div className="uploaded-file-info">
            <span className="file-name">{getFileName(fileName)}</span>
            <XIcon className="remove-file-icon" onClick={() => this.clearFile()} />
          </div>}
        </div>
        <div className="form-item-container body-container">
          <textarea name="body" className="form-item form-item-textarea" value={body} onChange={this.handleChange} disabled={fileName}></textarea>
          <label htmlFor="body" className="form-item-label">Article Body</label>
        </div>
        <div className="submit-container">
          <input className="submit-button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
