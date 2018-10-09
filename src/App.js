import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import ArticlesList from './containers/ArticlesList';
import ArticleView from './containers/ArticleView';
import CreateArticle from './containers/CreateArticle';
import LoginPage from './containers/LoginPage';
import UserSignup from './containers/UserSignup';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem('username')
    }
  }

  requireAuth() {
    if (!this.state.username) {
      console.log('inside if');
      console.log(this.props);
    }
  }
  render() {
    const usernameContent = this.state.username ? <span>{this.state.username}</span> : (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    )
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
              { usernameContent }
            </div>
          </div>
          <div className="App-body">
            <Route exact path="/" component={ArticlesList} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={UserSignup} />
            <Route path="/create" component={CreateArticle} />
            <Route path="/article/:id" component={ArticleView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
