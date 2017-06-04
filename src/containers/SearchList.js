import React, { Component } from 'react'
import Badge from '../components/Badge'
export default class SearchList extends Component {
    constructor(props) {
        super(props);
        let categories = this.props.categories || [];
        this.state = {
            newBadge: '',
            categories: categories
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories) {
            this.setState({
                ...this.state,
                categories: nextProps.categories
            });
        }
    }

     addNewBadge() {
        let categories = [];
        if (this.state.newBadge) {
            Array.prototype.push.apply(categories, this.state.categories);
            categories.push(this.state.newBadge);
            this.setState({
                ...this.state,
                newBadge: ''
            }, () => {
                this.props.onListChange(categories);
            });
        }
    }

    handleChange(event) {
        let obj = {};
        let target = event.target;
        obj[target.name] = target.value;
        this.setState(Object.assign({}, this.state, obj));
    }

    onBadgeClick(category) {
        let categories = [];
        Array.prototype.push.apply(categories, this.state.categories);
        let itemIndex = categories.indexOf(category);
        if (~itemIndex) {
            categories.splice(itemIndex, 1);
            this.props.onListChange(categories);
        }
    }

    render() {
        return (
            <div className="search-list">
                <div className="card-title">
                    <span>Search by category</span>
                </div>
                <div className="badges-list">
                    {this.state.categories.map((category, index) =>
                        <Badge name={category} key={index} onClick={() => this.onBadgeClick(category)}></Badge>
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
