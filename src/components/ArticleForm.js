import React, { Component, PropTypes } from 'react'

export default class Article extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let obj = {};
        let target = event.target;
        obj[target.name] = target.value;
        this.setState(Object.assign({}, this.state, obj));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Title:
                <input name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                Body:
                <textarea name="body" value={this.state.body} onChange={this.handleChange}></textarea>
            </label>
            <br/>
            <label>
                Author:
                <input name="author" value={this.state.author} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
  }
}
