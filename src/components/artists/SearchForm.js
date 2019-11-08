import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

const SearchForm = ({ handleChange, handleSubmit, query, decrementPage, incrementPage }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.SearchForm}>
      <input type="text" name="query" value={query} onChange={handleChange} placeholder="Search here" />
      <div className={styles.mainDiv}>
        <button className={styles.buttonSearch}>Search</button>
        <button className={styles.buttonBack} type="button" onClick={decrementPage}>⇦</button>
        <button className={styles.buttonForward} type="button" onClick={incrementPage}>⇨</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
  decrementPage: PropTypes.func,
  incrementPage: PropTypes.func
};

export default SearchForm;