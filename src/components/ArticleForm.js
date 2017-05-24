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
            author: 'Pavlo Berezin'
        };

        this.minRows = 40;

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
            <form onSubmit={this.handleSubmit} className="article-form">
                <div className="title-container">
                    <label htmlFor="title">Title:</label>
                    <input name="title" value={this.state.title} onChange={this.handleChange} required/>
                </div>
                <div className="body-container">
                    <label htmlFor="body">Body:</label>
                    <textarea name="body" value={this.state.body} onChange={this.handleChange} required></textarea>
                </div>
                {/* <div className="author-container">
                    <label htmlFor="author">Author:</label>
                    <input name="author" value={this.state.author} onChange={this.handleChange} required/>
                </div> */}
                <div className="submit-container">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}
