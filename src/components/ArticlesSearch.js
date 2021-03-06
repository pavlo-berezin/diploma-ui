import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { components } from 'react-select';
import { debounce } from 'debounce';
import { ReactComponent as Search } from '../icons/search.svg';
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
      multiValueLabel: (styles, { data }) => ({
        ...styles,
        fontSize: '14px',
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
      dropdownIndicator: (styles, { data }) => ({
        ...styles,
        'svg': {
          height: '20px',
          width: '20px',
          fill: '#cccccc'
        }
      })
    };

    const DropdownIndicator = (props) => {
      return components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
         <Search />
        </components.DropdownIndicator>
      );
    };


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
        components={{ DropdownIndicator }}
        isLoading={asyncCategoriesFetching}
        onChange={(newValue) => this.handleChange(newValue)}
        onInputChange={handleInputChange}
      />
    )
  }
}
