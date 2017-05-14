import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import ArticlesList from './containers/ArticlesList'
import CreateArticle from './containers/CreateArticle'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
            <div className="App-header top-bar">
                <div class="top-bar-left">
                    <ul class="dropdown menu" data-dropdown-menu>
                        <li class="menu-text">Analyzer 3000</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create</Link></li>
                    </ul>
                </div>
            </div>
           <div className="app-body">
                <Route exact path="/" component={ArticlesList}/>
                <Route path="/create" component={CreateArticle}/>
            </div>
        </div>
        </Router>
    );
  }
}

export default App;
