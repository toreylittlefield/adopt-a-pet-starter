import React, { useRef } from 'react';
import { useHistory } from 'react-router';

// import useHistory here.

const Search = () => {
  // get the history object here
  const history = useHistory();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchInputRef.current)
      throw new Error('search Input ref is not assigned');

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with history.push()
    history.push(`/search?${searchQuery}`);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
