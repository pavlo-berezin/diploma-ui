import React, { Component, PropTypes } from 'react'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        console.log(this.props.history);
        this.minRows = 40;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let obj = {};
        let target = event.target;
        obj[target.name] = target.value;
        this.setState(Object.assign({}, this.state, obj));
    }

    handleSubmit(event) {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        localStorage.setItem('username', this.state.username);
        this.props.history.push('/');
        // this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="username-container">
                        <label htmlFor="username">Username:</label>
                        <input name="username" value={this.state.usernmae} onChange={this.handleChange} required/>
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div className="submit-container">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        );
    }
}
