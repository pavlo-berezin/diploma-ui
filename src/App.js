import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';
import HomePage from './containers/HomePage';
import ArticleView from './containers/ArticleView';
import CreateArticle from './containers/CreateArticle';
import LoginPage from './containers/LoginPage';
import UserSignup from './containers/UserSignup';
import AppHeader from './components/AppHeader';
import { getAuthedUser, isAuthFetching, getAuthError } from './reducers';
import { fetchCurrentUser, logout } from './actions/auth';
import { connect } from 'react-redux';
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem('username')
    }
  }

  componentWillMount() {
    if (!this.props.user) {
      this.props.fetchCurrentUser();
    }
  }

  logout() {
    console.log('logout');
    this.props.logout();
  }

  render() {
    const { user, isAuthFetching } = this.props;
    const isAuthenticated = !isAuthFetching && user;
    console.log(isAuthFetching);


    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          isAuthFetching ? (
            <Loader />
          ) : isAuthenticated ? (
            <Component {...props} />
          ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }}
                />
              )
        }
      />
    );

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <AppHeader isAuthenticated={isAuthenticated} user={user} onLogout={() => this.logout()}></AppHeader>
          </div>
          <div className="App-body">
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={UserSignup} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute path="/create" component={CreateArticle} />
            <PrivateRoute path="/article/:id" component={ArticleView} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authError: getAuthError(state),
  isAuthFetching: isAuthFetching(state),
  user: getAuthedUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
