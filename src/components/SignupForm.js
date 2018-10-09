import React, { Component } from 'react';


export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      about: '',
      dob: 0,
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
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input name="password" value={this.state.password} type="password" onChange={this.handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input name="email" value={this.state.email} type="email" onChange={this.handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="dob">Date of birth:</label>
          <input name="dob" value={this.state.dob} type="date" onChange={this.handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="about">About yourself:</label>
          <input name="about" value={this.state.about} onChange={this.handleChange} />
        </div>
        <div className="submit-container">
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
