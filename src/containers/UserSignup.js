import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import SignupForm from '../components/SignupForm';
import { isAuthFetching, getAuthedUser, getAuthError } from '../reducers';


class UserSignup extends Component {
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

  handleSubmit(user) {
    this.props.signup(user);
  }

  render() {
    return (
      <div>
        <SignupForm onSubmit={this.handleSubmit}></SignupForm>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isAuthFetching: isAuthFetching(state),
  user: getAuthedUser(state),
  error: getAuthError(state)
})

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(signup(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSignup);
