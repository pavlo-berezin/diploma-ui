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

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
            <div className="App-header">
                <div className="title">Analyzer 3000</div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
                <div className="username">
                    Pavlo Berezin
                </div>
            </div>
           <div className="App-body">
                <Route exact path="/" component={ArticlesList}/>
                <Route path="/create" component={CreateArticle}/>
                <Route path="/article/:id" component={ArticleView}/>
            </div>
        </div>
        </Router>
    );
  }
}

export default App;
