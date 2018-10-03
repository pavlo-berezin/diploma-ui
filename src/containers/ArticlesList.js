import React, { Component } from 'react'
import Article from '../components/Article'
import SearchList from '../containers/SearchList'
import { Link } from 'react-router-dom'
import '../styles/articles-list.scss'


export default class ArticlesList extends Component {
    constructor(props) {
        super(props);
        var pattern = /categories=([^&]*)/;
        let search = this.props.location && this.props.location.search;
        let categories = [];
        if (search) {
            let category = search.match(pattern)[1];
            category && categories.push(category);
        }
        this.state = {
            articles: [],
            categories: categories
        };

        let username = localStorage.getItem('username');

        if(!username) {
            this.props.history.push('/login')
        }
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
        this.state.categories.length ? this.onSearchCallback(this.state.categories) : this.loadData();
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
