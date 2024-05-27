import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='input-view'>
      <div className="input-box">
        <input type="text" placeholder="Search for Products" />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
