import React, { Component, PropTypes } from 'react'

export default class Badge extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func
    }

    render() {
        return (
            <div className="badge" onClick={this.props.onClick}>
                <span>{this.props.name}</span>
            </div>
        );
    }
}
