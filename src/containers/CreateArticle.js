import React, { Component } from 'react'
import ArticleForm from '../components/ArticleForm'

export default class CreateArticle extends Component {
    onSubmit(state) {
        this.saveData(state);
    }

    saveData(payload) {
        let opt = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };
        fetch("/article", opt)
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 'OK') {
                    this.props.history.push('/')
                }
            });
    }

    render() {
        return (
            <div>
                <ArticleForm onSubmit={this.onSubmit.bind(this)}></ArticleForm>
            </div>
        );
    }
}
