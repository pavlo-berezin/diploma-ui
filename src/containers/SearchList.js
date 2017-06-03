import React, { Component, PropTypes } from 'react'
import Badge from '../components/Badge'
export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBadge: '',
            categories: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    addNewBadge() {
        let categories = this.state.categories;
        categories.push(this.state.newBadge);
        this.setState({
            categories: categories,
            newBadge: ''
        });
        this.props.searchCallback(this.state.categories);
    }

    handleChange(event) {
        let obj = {};
        let target = event.target;
        obj[target.name] = target.value;
        this.setState(Object.assign({}, this.state, obj));
    }

    render() {
        return (
            <div className="search-list">
                <div className="card-title">
                    <span>Search by category</span>
                </div>
                <div className="badges-list">
                    {this.state.categories.map((category, index) =>
                        <Badge name={category} key={index} ></Badge>
                    )}
                </div>
                <div className="add-new">
                    <input name="newBadge" value={this.state.newBadge} onChange={this.handleChange}></input>
                    <button onClick={() => this.addNewBadge()}>+</button>
                </div>
            </div>
      )
    }
}
