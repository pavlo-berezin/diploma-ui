import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import ArticlesList from './containers/ArticlesList'
import ArticleView from './containers/ArticleView'
import CreateArticle from './containers/CreateArticle'
import LoginPage from './containers/LoginPage'

class App extends Component {
    constructor(props) {
        super(props);
        let username = localStorage.getItem('username');

        this.state = {
            username: username
        }
    }

    requireAuth() {
        if (!this.state.username) {
            console.log('inside if');
            console.log(this.props);
        }
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <div className="title">Text Categorizer</div>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/create">Create</Link></li>
                        </ul>
                        <div className="username">
                            {!this.state.username && <Link to="/login">Login</Link>}
                            {this.state.username && <span>{this.state.username}</span>}
                        </div>
                    </div>
                   <div className="App-body">
                        <Route exact path="/" component={ArticlesList}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/create" component={CreateArticle}/>
                        <Route path="/article/:id" component={ArticleView}/>
                    </div>
                </div>
            </Router>
        );
  }
}

export default App;
