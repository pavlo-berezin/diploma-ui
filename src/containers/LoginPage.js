import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';
import { getAuthedUser, getAuthError, isAuthFetching } from '../reducers';
import '../styles/login-page.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAuthFetching && !this.props.isAuthFetching) {
      if (this.props.error) {
        console.log(this.props.error);
      } else if (this.props.user) {
        this.props.history.push('/');
      }
    }
  }

  handleSubmit({ username, password }) {
    this.props.login(username, password);
  }

  render() {
    return (
      <div className="login-form-container">
        <LoginForm onSubmit={this.handleSubmit}></LoginForm>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isAuthFetching: isAuthFetching(state),
  user: getAuthedUser(state),
  error: getAuthError(state)
})


const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

