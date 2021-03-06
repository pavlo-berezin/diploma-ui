import React, { Component } from 'react';
import '../styles/login-page.scss';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <div className="username-container">
          <label htmlFor="username">Username:</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} required />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
        </div>
        <div className="submit-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    );
  }
}
