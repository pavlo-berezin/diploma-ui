import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory, removeCategory } from '../actions/categories';
import { getCategories } from '../reducers';
import BadgesList from './BadgesList';


class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBadge: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  addNewBadge() {
    const { newBadge } = this.state;

    newBadge && this.props.addCategory(newBadge);

    this.setState({
      ...this.state,
      newBadge: ''
    });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  onBadgeClick(category) {
    this.props.removeCategory(category);
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="search-list">
        <div className="card-title">
          <span>Search by category</span>
        </div>
        <div className="badges-list">
          <BadgesList categories={categories} onBadgeClick={(category) => this.onBadgeClick(category)}></BadgesList>
        </div>
        <div className="add-new">
          <input name="newBadge" value={this.state.newBadge} onChange={this.handleChange}></input>
          <button onClick={() => this.addNewBadge()}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const categories = getCategories(state);
  return { categories }
}

const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category)),
  removeCategory: (category) => dispatch(removeCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);


