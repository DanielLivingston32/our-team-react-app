import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="search">
    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
    <input
      className="searchBox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
