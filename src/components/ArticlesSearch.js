import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { debounce } from 'debounce';
import '../styles/articles-search.scss';

export default class ArticlesSearch extends Component {
  handleChange(newValue) {
    const categories = newValue.map(({ value }) => value);
    this.props.onCategoriesChange(categories);
  };

  handleInputChange(inputValue) {
    if (inputValue) {
      this.props.onCategorySearch(inputValue);
    }
  }

  render() {
    const styles = {
      multiValue: (styles, { data }) => ({
        ...styles,
        backgroundColor: '#F8BBD0',
        borderRadius: '7px'
      }),
      multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: 'rgba(0, 0, 0, 0.5)',
        ':hover': {
          color: 'rgba(0, 0, 0, 0.8)',
          backgroundColor: '#F8BBD0',
          borderRadius: '7px',
          cursor: 'pointer'
        },
      }),
    }


    const { categories, asyncCategories, asyncCategoriesFetching } = this.props;
    const handleInputChange = debounce(this.handleInputChange.bind(this), 375)

    const value = categories.map(category => ({ label: category, value: category }))
    const options = asyncCategories.map(({ name }) => ({ label: name, value: name }));

    return (
      <CreatableSelect
        isClearable
        isMulti
        value={value}
        options={options}
        styles={styles}
        isLoading={asyncCategoriesFetching}
        onChange={(newValue) => this.handleChange(newValue)}
        onInputChange={handleInputChange}
      />
    )
  }
}
