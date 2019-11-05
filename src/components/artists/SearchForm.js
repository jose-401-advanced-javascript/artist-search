import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ handleChange, handleSubmit, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" value={query} onChange={handleChange} placeholder="Search here" />
      <button>Search</button>
    </form>
  );
}; 

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string
};

export default SearchForm;