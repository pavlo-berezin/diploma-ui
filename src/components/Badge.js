import React, { Component, PropTypes } from 'react'

export default class Badge extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="badge">
                <span>{this.props.name}</span>
            </div>
        );
    }
}
