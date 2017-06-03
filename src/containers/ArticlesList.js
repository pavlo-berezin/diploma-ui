import React, { Component } from 'react'
import Article from '../components/Article'
import SearchList from '../containers/SearchList'
import { Link } from 'react-router-dom'
export default class ArticlesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            categories: []
        };
    }

    loadData(filter={}) {
        var url = 'article'
        if (filter.categories && filter.categories.length) {
            url += `?categories=${filter.categories}`;
        }
        fetch(url)
        .then(response => response.json())
        .then(response => {
            this.setState({
                ...this.state,
                articles: response.articles,
            });
        });
    }

    onSearchCallback(categories) {
        let categoriesQuery = categories.join();
        this.loadData({
            categories: categoriesQuery
        })
    }

    componentWillMount() {
        this.loadData();
    }

    onBadgeClick(badge) {
        let categories = []
        Array.prototype.push.apply(categories, this.state.categories);
        categories.push(badge);
        this.onListChange(categories);
    }

    onListChange(newList) {
        this.setState({
            ...this.state,
            categories: newList
        });
        this.onSearchCallback(newList);
    }

    render() {
        return (
            <div className="articles-list-container">
                <div className="search-list-container">
                    <SearchList categories={this.state.categories} onListChange={(newList) => this.onListChange(newList)}/>
                </div>
                <div className="articles-list">
                    {this.state.articles.map((article, index) =>
                        <div key={article._id} className="article-container">
                            <Article {...article} id={article._id} onBadgeClick={(badge) => this.onBadgeClick(badge)}/>
                            <Link to={'/article/' + article._id} key={index} className="more-link">Go to article</Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
