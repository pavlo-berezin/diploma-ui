import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import SignupForm from '../components/SignupForm';

const CreateArticle = (props) => {
  const handleSubmit = (user) => {
    props.signup(user);
    props.history.push('/');
  }
  console.log(handleSubmit);
  return (
    <div>
      <SignupForm onSubmit={ (user) => handleSubmit(user)}></SignupForm>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(signup(data))
});

export default connect(null, mapDispatchToProps)(CreateArticle);
